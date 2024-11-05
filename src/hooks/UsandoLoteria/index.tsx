import { useContext } from "react";
import { LoteriaContext } from "../../contexts";

export const useLottery = () => {
  const context = useContext(LoteriaContext);
  if (context === undefined) {
    throw new Error("useLottery must be used within a LotteryProvider");
  }
  return context;
};