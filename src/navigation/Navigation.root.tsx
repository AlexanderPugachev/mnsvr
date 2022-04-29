import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditTransactionModal, HomeScreen, NotFoundScreen, TransactionsScreen } from "screens";
import * as React from "react";
import { IconButton } from "react-native-paper";
import { RootStackParamList } from "./Navigation.config";
import { Button } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
      <Stack.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <IconButton
              onPress={() => navigation.navigate("Transaction", { mode: "create" })}
              icon={"plus"}
            />
          )
        })}
      />

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Transaction"
          component={EditTransactionModal}
          options={({ navigation, route }) => ({
            title: `${route.params.mode} transaction`,
            headerLeft: () => <Button title={"Cancel"} onPress={() => navigation.goBack()} />
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
