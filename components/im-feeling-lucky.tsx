import { useChainModal } from "@rainbow-me/rainbowkit";
import { waitForTransactionReceipt } from "@wagmi/core";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { createConfig, http, useWriteContract } from "wagmi";
import { useChainUnsupported } from "../hooks/useChainUnsupported";
import styles from "../styles/Home.module.css";
import { CHAIN, JACKPOT_ADDRESS } from "../utils/contract-addresses";
import { feelingLuckyAbi } from "../utils/contracts/feeling-lucky-abi";

interface Props {
  plays: number;
  refetch: () => void;
}

export const FeelingLucky = ({ plays, refetch }: Props) => {
  const { writeContractAsync } = useWriteContract();

  const chainUnsupported = useChainUnsupported();
  const { openChainModal } = useChainModal();

  const feelingLucky = useCallback(async () => {
    const transactionToastId = toast.loading("Transaction pending...");

    if (chainUnsupported) {
      toast.error("Unsupported chain", { id: transactionToastId });
      openChainModal?.();
      return;
    }

    try {
      const toPlay = plays > 200 ? 200 : plays;

      const feelingLuckyTxnHash = await writeContractAsync({
        address: JACKPOT_ADDRESS,
        abi: feelingLuckyAbi,
        functionName: "feelingLucky",
        args: [BigInt(toPlay)],
      });

      toast.loading("Submitting transaction", { id: transactionToastId });

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
          hash: feelingLuckyTxnHash,
        }
      );

      toast.success("You rolled for the jackpot!", { id: transactionToastId });

      refetch();
    } catch (ex) {
      toast.error("Transaction failed", { id: transactionToastId });
    }
  }, [chainUnsupported, openChainModal, plays, refetch, writeContractAsync]);

  return (
    <>
      <h4>You have {plays} tickets ready! 🎟️</h4>
      <p>{`Press button below then check wallet`}</p>
      <p
        className={styles.btn}
        onClick={async () => {
          await feelingLucky();
        }}
      >
        {`I'm Feeling Lucky 🍀`}
      </p>
    </>
  );
};
