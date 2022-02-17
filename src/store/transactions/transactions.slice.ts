import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "models";
import { useActions } from "../store";

interface InitState {
  transactions: Transaction[];
}

const initialState: InitState = {
  transactions: []
};

export const transactionSlice = createSlice({
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },
    _setSliceStateFromAS: (state, action: PayloadAction<InitState>) => {
      state.transactions.length = 0;
      if (!action.payload) return;
      for (let param in action.payload) {
        // @ts-ignore
        state[param] = action.payload[param];
      }
    }
  },
  name: "transactions"
});
