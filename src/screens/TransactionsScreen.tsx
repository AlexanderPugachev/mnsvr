import { TransactionListItem } from "components";
import { ScreenProps } from "navigation";
import { useAllTransactions } from "store";
import * as React from "react";

export function TransactionsScreen(props: ScreenProps) {
  const transactions = useAllTransactions();

  return (
    <>
      {transactions?.map((transaction) => (
        <TransactionListItem key={transaction.id} {...props} {...transaction} />
      ))}
    </>
  );
}
