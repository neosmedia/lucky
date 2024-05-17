import { formatEther } from "viem";
import { useReadContract, useWatchContractEvent } from "wagmi";
import { JACKPOT_ADDRESS } from "../utils/contract-addresses";
import { tokenBalanceAbi } from "../utils/contracts/token-balance-abi";
import { tokensReceivedAbi } from "../utils/contracts/tokens-received-abi";

export const JackpotTotal = () => {
  const {
    data: jackpotTotal,
    isLoading,
    refetch,
  } = useReadContract({
    address: JACKPOT_ADDRESS,
    abi: tokenBalanceAbi,
    functionName: "tokenBalance",
  });

  useWatchContractEvent({
    address: JACKPOT_ADDRESS,
    abi: tokensReceivedAbi,
    eventName: "TokensReceived",
    onLogs() {
      console.log("Tokens received");
      refetch();
    },
  });

  return (
    <>
      <h4>Growing Jackpot Total 🎩</h4>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <h2>
          {formatEther(jackpotTotal ?? BigInt("0"))} <small>$DEGEN</small>
        </h2>
      )}
      <p>Last updated 3 mins ago</p>
    </>
  );
};
