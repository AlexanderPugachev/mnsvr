import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction, TransactionId, TransactionUpdateDto } from "models";
import formatISO from "date-fns/formatISO";
import uuid from "react-native-uuid";

interface InitState {
  transactions: Transaction[];
}

const initialState: InitState = {
  transactions: []
};

export const transactionSlice = createSlice({
  initialState,
  reducers: {
    createItem: (state, action: PayloadAction<TransactionUpdateDto>) => {
      const now = Date.now();
      const transaction: Transaction = {
        id: uuid.v4() as TransactionId,
        createDate: formatISO(now, { representation: "date" }),
        createTime: formatISO(now, { representation: "time" }),
        ...action.payload
      };
      state.transactions.push(transaction);
    },
    deleteItem: (state, action: PayloadAction<TransactionId>) => {
      const index = state.transactions.findIndex((it) => it.id === action.payload);
      state.transactions.splice(index, 1);
    },
    editItem: (state, action: PayloadAction<Transaction>) => {
      const index = state.transactions.findIndex((it) => it.id === action.payload.id);
      state.transactions.splice(index, 1, action.payload);
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
