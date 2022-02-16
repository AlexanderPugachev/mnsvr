import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "models";
import { useActions } from "../store";

const initialState: Transaction[] = [];

export const transactionSlice = createSlice({
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<Transaction>) => {
      state.push(action.payload);
    }
  },
  name: "transactions"
});
