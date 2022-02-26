import React, { useEffect, useState } from "react";
import { categoriesSlice, RootState, transactionSlice, useActions } from "store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const StoreGate: React.FC = ({ children }) => {
  const { _setSliceStateFromAS: setTransactions } = useActions(transactionSlice.actions);
  const { _setSliceStateFromAS: setCategories } = useActions(categoriesSlice.actions);
  const [storageLoaded, setStorageLoaded] = useState(false);

  const updateStore = async () => {
    const res = await AsyncStorage.getItem("store");
    if (!res) return setStorageLoaded(true);
    const storage: RootState = JSON.parse(res);

    setTransactions(storage.transactions);
    setCategories(storage.categories);

    setStorageLoaded(true);
  };

  useEffect(() => {
    updateStore();
  }, []);

  if (!storageLoaded) return null;
  return <>{children}</>;
};
