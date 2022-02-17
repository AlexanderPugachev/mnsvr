import React, { useEffect, useState } from "react";
import { RootState, transactionSlice, useActions } from "store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const StoreGate: React.FC = ({ children }) => {
  const { _setSliceStateFromAS } = useActions(transactionSlice.actions);
  const [storageLoaded, setStorageLoaded] = useState(false);

  const updateStore = async () => {
    const res = await AsyncStorage.getItem("store");
    if (!res) return setStorageLoaded(true);
    const storage: RootState = JSON.parse(res);
    _setSliceStateFromAS(storage.transactions);
    setStorageLoaded(true);
  };

  useEffect(() => {
    updateStore();
  }, []);

  if (!storageLoaded) return null;
  return <>{children}</>;
};
