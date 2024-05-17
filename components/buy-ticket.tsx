"use client";
import { waitForTransactionReceipt } from "@wagmi/core";
import { useCallback, useMemo } from "react";
import toast from "react-hot-toast";
import { http, parseEther } from "viem";
import { sepolia } from "viem/chains";
import { createConfig, useAccount, useConfig, useWriteContract } from "wagmi";
import styles from "../styles/Home.module.css";
import { DEGEN_ADDRESS, JACKPOT_ADDRESS } from "../utils/contract-addressex";
import { enterDrawAbi } from "../utils/contracts/enter-draw-abi";
import { increaseAllowanceAbi } from "../utils/contracts/increase-allowance-abi";

export const BuyTicket = () => {
  const { writeContractAsync } = useWriteContract();

  const { chains } = useConfig();
  const { chain } = useAccount();

  const chainUnsupported = useMemo(() => {
    if (!chain) {
      return true;
    }

    return !chains.includes(chain);
  }, [chain, chains]);

  const enterDraw = useCallback(
    async (amount: string) => {
      const transactionToastId = toast.loading("Awaiting token approval...");

      try {
        const allowanceIncreaseTxnHash = await writeContractAsync({
          address: DEGEN_ADDRESS,
          abi: increaseAllowanceAbi,
          args: [JACKPOT_ADDRESS, parseEther(amount)],
          functionName: "increaseAllowance",
        });

        await waitForTransactionReceipt(
          createConfig({
            chains: [sepolia],
            transports: {
              [sepolia.id]: http(),
            },
          }),
          {
            confirmations: 1,
            chainId: sepolia.id,
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
            chains: [sepolia],
            transports: {
              [sepolia.id]: http(),
            },
          }),
          {
            confirmations: 1,
            chainId: sepolia.id,
            hash: enterDrawTxnHash,
          }
        );

        toast.success("Entered draw!", { id: transactionToastId });
      } catch (ex: any) {
        if (ex.message.includes("User rejected the request.")) {
          toast.error("User rejected the request!", { id: transactionToastId });
        } else {
          toast.error("An error occurred", { id: transactionToastId });
        }
      }
    },
    [writeContractAsync]
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
