import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "models";
import { useActions } from "../store";

const initialState: { transactions: Transaction[] } = {
  transactions: []
};

export const transactionSlice = createSlice({
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },
    _setFromAS: (state, action: PayloadAction<Transaction[]>) => {
      state.transactions.length = 0;
      console.log("action.payload", action.payload);
      if (!action.payload.length) return;
      state.transactions = [...action.payload];
    }
  },
  name: "transactions"
});
