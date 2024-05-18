import { RainbowKitProvider, connectorsForWallets } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { coinbaseWallet, metaMaskWallet, phantomWallet, rabbyWallet, rainbowWallet, walletConnectWallet } from "@rainbow-me/rainbowkit/wallets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { http } from "viem";
import { base, sepolia } from "viem/chains";
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
  chains: [base, sepolia],
  connectors,
  transports: {
    [base.id]: http(),
    [sepolia.id]: http(),
  },
});

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
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
