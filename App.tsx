import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import { Navigation } from "navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { store } from "store";
import { StoreGate } from "components";

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
