export const tokensReceivedAbi = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "TokensReceived",
    type: "event",
  },
] as const;
