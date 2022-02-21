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
  createDate: string;
  createTime: string;
}

export type TransactionUpdateDto = Omit<Transaction, "id" | "createTime" | "createDate">;
