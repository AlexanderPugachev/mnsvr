import {ColorSchemeName} from "react-native";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import * as React from "react";
import {RootNavigator} from "./Navigation.root";
import {navigationConfig} from "./Navigation.config";

export function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
            linking={navigationConfig}
        >
            <RootNavigator/>
        </NavigationContainer>
    );
}