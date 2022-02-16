import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import { Navigation } from "navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { store, transactionSlice, useActions } from "store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StoreGate: React.FC = ({ children }) => {
  const { _setFromAS } = useActions(transactionSlice.actions);
  const [storageLoaded, setStorageLoaded] = useState(false);

  const updateStore = async () => {
    const res = await AsyncStorage.getItem("store");
    if (!res) return setStorageLoaded(true);
    const storage = JSON.parse(res);
    _setFromAS(storage.transactions.transactions);
    setStorageLoaded(true);
  };

  useEffect(() => {
    updateStore();
  }, []);

  if (!storageLoaded) return null;
  return <>{children}</>;
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) return null;
  return (
    <React.Fragment>
      <Provider store={store}>
        <PaperProvider>
          <SafeAreaProvider>
            <StoreGate>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </StoreGate>
          </SafeAreaProvider>
        </PaperProvider>
      </Provider>
    </React.Fragment>
  );
}
