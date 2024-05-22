import { formatEther } from "viem";
import { useReadContract, useWatchContractEvent } from "wagmi";
import { DEGEN_ADDRESS, JACKPOT_ADDRESS } from "../utils/contract-addresses";
import { balanceOfAbi } from "../utils/contracts/balance-of-abi";
import { tokensReceivedAbi } from "../utils/contracts/tokens-received-abi";

export const JackpotTotal = () => {
  const {
    data: jackpotTotal,
    isLoading,
    refetch,
  } = useReadContract({
    address: DEGEN_ADDRESS,
    abi: balanceOfAbi,
    functionName: "balanceOf",
    args: [JACKPOT_ADDRESS],
  });

  useWatchContractEvent({
    address: JACKPOT_ADDRESS,
    abi: tokensReceivedAbi,
    eventName: "TokensReceived",
    onLogs() {
      refetch();
    },
  });

  return (
    <>
      <h4>Jackpot Total 👇</h4>
      {isLoading ? (
        <h2>
          <small>Loading Jackpot</small>
        </h2>
      ) : (
        <h2>
          {formatEther(jackpotTotal ?? BigInt("0"))} <small>$DEGEN</small>
        </h2>
      )}
      <p>
        <small>Winner gets 75% of growing Jackpot</small>
      </p>
    </>
  );
};
