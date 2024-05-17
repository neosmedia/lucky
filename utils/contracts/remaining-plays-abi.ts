export const checkRemainingPlaysAbi = [
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "checkRemainingPlays",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;
