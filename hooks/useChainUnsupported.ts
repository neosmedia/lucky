import { useMemo } from "react";
import { useAccount, useConfig } from "wagmi";

export const useChainUnsupported = () => {
  const { chains } = useConfig();
  const { chain } = useAccount();

  return useMemo(() => {
    if (!chain) {
      return true;
    }

    return !chains.some((x) => x.id === chain.id);
  }, [chain, chains]);
};
