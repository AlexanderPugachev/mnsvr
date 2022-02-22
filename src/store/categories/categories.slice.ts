import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "models";

interface InitState {
  categories: Category[];
}

const initialState: InitState = {
  categories: []
};

export const categoriesSlice = createSlice({
  initialState,
  reducers: {
    createItem: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<Category["name"]>) => {
      const index = state.categories.findIndex((it) => it.name === action.payload);
      state.categories.splice(index, 1);
    },
    editItem: (state, action: PayloadAction<Category>) => {
      const index = state.categories.findIndex((it) => it.name === action.payload.name);
      state.categories.splice(index, 1, action.payload);
    },
    _setSliceStateFromAS: (state, action: PayloadAction<InitState>) => {
      state.categories.length = 0;
      if (!action.payload) return;
      for (let param in action.payload) {
        // @ts-ignore
        state[param] = action.payload[param];
      }
    }
  },
  name: "categories"
});
