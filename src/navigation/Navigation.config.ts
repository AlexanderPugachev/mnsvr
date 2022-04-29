import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Transaction } from "models";

export interface RootStackParamList extends Record<string, undefined | object> {
  Home: undefined;
  Transactions: undefined;
  NotFound: undefined;
  Transaction: { mode: "create" } | { mode: "edit"; transaction: Transaction };
}

export type ScreenProps = NativeStackScreenProps<RootStackParamList>;
export type DirectScreenProps<RouteName extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  RouteName
>;

export const navigationConfig: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Home: "/",
      Transactions: "transactions",
      Transaction: "transactions/item",
      NotFound: "*"
    }
  }
};
