"use client";
import { parseEther } from "viem";
import { useWriteContract } from "wagmi";
import styles from "../styles/Home.module.css";
import { DEGEN_ADDRESS, JACKPOT_ADDRESS } from "../utils/contract-addressex";
import { enterDrawAbi } from "../utils/contracts/enter-draw-abi";
import { increaseAllowanceAbi } from "../utils/contracts/increase-allowance-abi";

export const BuyTicket = () => {
  const { writeContractAsync } = useWriteContract();

  return (
    <>
      <p
        className={styles.btn}
        onClick={async () => {
          const allowanceIncrease = await writeContractAsync({
            address: DEGEN_ADDRESS,
            abi: increaseAllowanceAbi,
            args: [JACKPOT_ADDRESS, parseEther("20")],
            functionName: "increaseAllowance",
          });

          const enterDraw = await writeContractAsync({
            address: JACKPOT_ADDRESS,
            abi: enterDrawAbi,
            functionName: "enterDraw",
            args: [parseEther("20")],
          });
        }}
      >
        Get 1 ticket 20$
      </p>
      <p className={styles.btn} onClick={() => alert("2")}>
        Get 5 tickets 80$
      </p>
    </>
  );
};
