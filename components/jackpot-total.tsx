import { formatEther } from "viem";
import { useReadContract } from "wagmi";
import { JACKPOT_ADDRESS } from "../utils/contract-addressex";
import { tokenBalanceAbi } from "../utils/contracts/token-balance";

export const JackpotTotal = () => {
  const { data: jackpotTotal, isLoading } = useReadContract({
    address: JACKPOT_ADDRESS,
    abi: tokenBalanceAbi,
    functionName: "tokenBalance",
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
