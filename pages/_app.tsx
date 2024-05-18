import { RainbowKitProvider, connectorsForWallets } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { coinbaseWallet, metaMaskWallet, phantomWallet, rabbyWallet, rainbowWallet, walletConnectWallet } from "@rainbow-me/rainbowkit/wallets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { http } from "viem";
import { base } from "viem/chains";
import { WagmiProvider, createConfig } from "wagmi";
import "../styles/globals.css";

const WALLET_CONNECT_ID = "f927b169e272f8fdcf2800c0211da5b9";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Wallet List",
      wallets: [metaMaskWallet, coinbaseWallet, walletConnectWallet, rainbowWallet, rabbyWallet, phantomWallet],
    },
  ],
  {
    appName: "Feeling Lucky Jackpot",
    projectId: WALLET_CONNECT_ID,
  }
);

const config = createConfig({
  chains: [base],
  connectors,
  transports: {
    [base.id]: http("https://mainnet.base.org"),
  },
});

// const config = getDefaultConfig({
//   appName: "Lucky Jackpot",
//   projectId: "f927b169e272f8fdcf2800c0211da5b9",
//   chains: [CHAIN],

//   ssr: true,
// });

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!window || !localStorage) {
      return;
    }

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
