export type Chain = "goerli";

export const isChain = (chain: string): chain is Chain => {
  return chain === "goerli";
};
