import uuid from "react-native-uuid";

enum TransactionIdBrand {
  _ = ""
}
export type TransactionId = TransactionIdBrand & string;

export interface Transaction {
  id: TransactionId;
  amount: number;
  currency: string;
  account: string;
  category: string;
  party: string;
}

const createTransaction = (params: Omit<Transaction, "id">): Transaction => {
  const id = uuid.v4() as TransactionId;
  return { ...params, id };
};

export const transactionUtils = {
  create: createTransaction
};
