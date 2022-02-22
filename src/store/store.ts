import { bindActionCreators, combineReducers, configureStore } from "@reduxjs/toolkit";
import { transactionSlice } from "./transactions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { ActionCreatorsMapObject } from "redux";
import { categoriesSlice } from "./categories";

const rootReducer = combineReducers({
  transactions: transactionSlice.reducer,
  categories: categoriesSlice.reducer
});

export const store = configureStore({ reducer: rootReducer });

store.subscribe(async () => await AsyncStorage.setItem("store", JSON.stringify(store.getState())));

export type RootState = ReturnType<typeof rootReducer>;

type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();

export const useActions = <T, C extends ActionCreatorsMapObject<T>>(actions: C) => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
