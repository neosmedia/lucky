"use client";

import { useState } from "react";
import { getAddress, zeroAddress } from "viem";
import { useAccount, useReadContract, useWatchContractEvent } from "wagmi";
import styles from "../styles/Home.module.css";
import { JACKPOT_ADDRESS } from "../utils/contract-addresses";
import { gameWonAbi } from "../utils/contracts/game-won-abi";
import { checkRemainingPlaysAbi } from "../utils/contracts/remaining-plays-abi";
import { BuyTicket } from "./buy-ticket";
import { FeelingLucky } from "./im-feeling-lucky";

export const PurchaseOptions = () => {
  const { address } = useAccount();

  const [winner, setWinner] = useState<boolean>(false);

  const { data: remainingPlays, isLoading } = useReadContract({
    address: JACKPOT_ADDRESS,
    abi: checkRemainingPlaysAbi,
    args: [address ?? zeroAddress],
    functionName: "checkRemainingPlays",
  });

  useWatchContractEvent({
    address: JACKPOT_ADDRESS,
    abi: gameWonAbi,
    eventName: "GameWon",
    onLogs(logs) {
      if (!address) {
        return;
      }

      const isWinner = logs.some((log) => {
        if (!log.args.winner) {
          return false;
        }

        return getAddress(log.args.winner) === getAddress(address);
      });

      setWinner(isWinner);
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (winner) {
    return (
      <>
        <h4>Your ticket is a winner 🎉</h4>
        <h2>Congratulations, you won the Jackpot!</h2>
        <p className={styles.btn}>Play Again</p>
      </>
    );
  }

  if (remainingPlays && remainingPlays > BigInt(0)) {
    return (
      <>
        <FeelingLucky plays={Number(remainingPlays)} />
      </>
    );
  }

  return (
    <>
      <h4>Purchase tickets with $DEGEN 🎟️</h4>
      <h2>Tickets 20 $DEGEN each</h2>
      <BuyTicket />
    </>
  );
};
