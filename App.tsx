import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { Navigation } from './navigation';
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from "@ui-kitten/eva-icons";
import {Provider as PaperProvider} from "react-native-paper";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) return null;
    return (
        <React.Fragment>
            <IconRegistry icons={EvaIconsPack}/>
            <PaperProvider>
                <ApplicationProvider {...eva} theme={eva[colorScheme]}>
                    <SafeAreaProvider>
                        <Navigation colorScheme={colorScheme}/>
                        <StatusBar/>
                    </SafeAreaProvider>
                </ApplicationProvider>
            </PaperProvider>
        </React.Fragment>
    );
}
