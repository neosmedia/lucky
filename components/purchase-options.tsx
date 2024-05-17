"use client";

import { zeroAddress } from "viem";
import { useAccount, useReadContract } from "wagmi";
import { JACKPOT_ADDRESS } from "../utils/contract-addresses";
import { checkRemainingPlaysAbi } from "../utils/contracts/remaining-plays-abi";
import { BuyTicket } from "./buy-ticket";
import { FeelingLucky } from "./im-feeling-lucky";

export const PurchaseOptions = () => {
  const { address } = useAccount();

  const { data: remainingPlays, isLoading } = useReadContract({
    address: JACKPOT_ADDRESS,
    abi: checkRemainingPlaysAbi,
    args: [address ?? zeroAddress],
    functionName: "checkRemainingPlays",
  });

  if (isLoading) {
    return <p>Loading...</p>;
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
