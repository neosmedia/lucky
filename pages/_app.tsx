import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";

import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { WagmiProvider } from "wagmi";
import { CHAIN } from "../utils/contract-addresses";

const config = getDefaultConfig({
  appName: "Lucky Jackpot",
  projectId: "f927b169e272f8fdcf2800c0211da5b9",
  chains: [CHAIN],
  ssr: true,
});

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const hasClearedLocalStorage = localStorage.getItem("hasClearedLocalStorage");

    if (!hasClearedLocalStorage) {
      console.log("clearing");
      localStorage.clear();
      sessionStorage.clear();
      localStorage.setItem("hasClearedLocalStorage", "true");
    }
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          <Toaster />
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
