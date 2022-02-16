import { RootState } from "store";
import { useSelector } from "react-redux";

const allTransactionsSelector = (state: RootState) => state.transactions.transactions;
export const useAllTransactions = () => useSelector(allTransactionsSelector);
