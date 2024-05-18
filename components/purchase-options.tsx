"use client";

import { useState } from "react";
import { getAddress, zeroAddress } from "viem";
import { useAccount, useReadContract, useWatchContractEvent } from "wagmi";
import styles from "../styles/Home.module.css";
import { JACKPOT_ADDRESS } from "../utils/contract-addresses";
import { gamePlayedAbi } from "../utils/contracts/game-played-abi";
import { gameWonAbi } from "../utils/contracts/game-won-abi";
import { checkRemainingPlaysAbi } from "../utils/contracts/remaining-plays-abi";
import { tokensReceivedAbi } from "../utils/contracts/tokens-received-abi";
import { BuyTicket } from "./buy-ticket";
import { FeelingLucky } from "./im-feeling-lucky";

export const PurchaseOptions = () => {
  const { address } = useAccount();

  const [winner, setWinner] = useState<boolean>(false);
  const [loser, setLoser] = useState<boolean>(false);

  const {
    data: remainingPlays,
    isLoading,
    refetch,
  } = useReadContract({
    address: JACKPOT_ADDRESS,
    abi: checkRemainingPlaysAbi,
    args: [address ?? zeroAddress],
    functionName: "checkRemainingPlays",
  });

  useWatchContractEvent({
    address: JACKPOT_ADDRESS,
    abi: tokensReceivedAbi,
    eventName: "TokensReceived",
    onLogs(logs: any[]) {
      if (!address) {
        return;
      }

      const fromConnectedAddress = logs.some((log) => {
        if (!log.args.from) {
          return false;
        }

        return getAddress(log.args.from) === getAddress(address);
      });

      if (fromConnectedAddress) {
        refetch();
      }
    },
  });

  useWatchContractEvent({
    address: JACKPOT_ADDRESS,
    abi: gameWonAbi,
    eventName: "GameWon",
    onLogs(logs: any[]) {
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

  useWatchContractEvent({
    address: JACKPOT_ADDRESS,
    abi: gamePlayedAbi,
    eventName: "GamePlayed",
    onLogs(logs: any[]) {
      if (!address) {
        return;
      }

      const fromConnectedAddress = logs.some((log) => {
        if (!log.args.player) {
          return false;
        }

        return getAddress(log.args.player) === getAddress(address);
      });

      if (fromConnectedAddress) {
        setLoser(true);
      }
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (loser) {
    return (
      <>
        <h4>Sorry, not a winner</h4>
        <p>Better luck next time</p>
        <p
          className={styles.btn}
          onClick={() => {
            refetch();
            setLoser(false);
            setWinner(false);
          }}
        >
          Play Again
        </p>
      </>
    );
  }

  if (winner) {
    return (
      <>
        <h4>Your ticket is a winner 🎉</h4>
        <h2>Congrats, you won. Jackpot has been sent!</h2>
        <p
          className={styles.btn}
          onClick={() => {
            refetch();
            setLoser(false);
            setWinner(false);
          }}
        >
          Play Again
        </p>
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
      <h2>Tickets 20 $DEGEN Each</h2>
      <BuyTicket />
    </>
  );
};
