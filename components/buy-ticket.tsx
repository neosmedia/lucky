"use client";
import { useChainModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { waitForTransactionReceipt } from "@wagmi/core";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { http, parseEther } from "viem";
import { createConfig, useAccount, useWriteContract } from "wagmi";
import { useChainUnsupported } from "../hooks/useChainUnsupported";
import styles from "../styles/Home.module.css";
import { CHAIN, DEGEN_ADDRESS, JACKPOT_ADDRESS } from "../utils/contract-addresses";
import { enterDrawAbi } from "../utils/contracts/enter-draw-abi";
import { increaseAllowanceAbi } from "../utils/contracts/increase-allowance-abi";

export const BuyTicket = () => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  const { writeContractAsync } = useWriteContract();

  const chainUnsupported = useChainUnsupported();
  const { openChainModal } = useChainModal();

  const enterDraw = useCallback(
    async (amount: string) => {
      const transactionToastId = toast.loading("Awaiting token approval...");

      if (!isConnected) {
        toast.error("Not connected", { id: transactionToastId });
        openConnectModal?.();
        return;
      }

      if (chainUnsupported) {
        toast.error("Unsupported chain", { id: transactionToastId });
        openChainModal?.();
        return;
      }

      try {
        const allowanceIncreaseTxnHash = await writeContractAsync({
          address: DEGEN_ADDRESS,
          abi: increaseAllowanceAbi,
          args: [JACKPOT_ADDRESS, parseEther(amount)],
          functionName: "increaseAllowance",
        });

        await waitForTransactionReceipt(
          createConfig({
            chains: [CHAIN],
            transports: {
              [CHAIN.id]: http(),
            },
          }),
          {
            confirmations: 1,
            chainId: CHAIN.id,
            hash: allowanceIncreaseTxnHash,
          }
        );

        toast.success("Approval set!", { id: transactionToastId });

        toast.loading("Submitting transaction", { id: transactionToastId });

        const enterDrawTxnHash = await writeContractAsync({
          address: JACKPOT_ADDRESS,
          abi: enterDrawAbi,
          functionName: "enterDraw",
          args: [parseEther(amount)],
        });

        await waitForTransactionReceipt(
          createConfig({
            chains: [CHAIN],
            transports: {
              [CHAIN.id]: http(),
            },
          }),
          {
            confirmations: 1,
            chainId: CHAIN.id,
            hash: enterDrawTxnHash,
          }
        );

        toast.success("Tickets purchased", { id: transactionToastId });
      } catch (ex: any) {
        if (ex.message.includes("User rejected the request")) {
          toast.error("User rejected the request", { id: transactionToastId });
        } else {
          toast.error("An error occurred", { id: transactionToastId });
        }
      }
    },
    [chainUnsupported, isConnected, openChainModal, openConnectModal, writeContractAsync]
  );

  return (
    <>
      <p
        className={styles.btn}
        onClick={async () => {
          await enterDraw("20");
        }}
      >
        Get 1 ticket 20$
      </p>
      <p
        className={styles.btn}
        onClick={async () => {
          await enterDraw("100");
        }}
      >
        Get 5 tickets 100$
      </p>
    </>
  );
};
