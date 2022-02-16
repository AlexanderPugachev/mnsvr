/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import {LinkingOptions} from '@react-navigation/native';
import * as Linking from 'expo-linking';
import {NativeStackScreenProps} from "@react-navigation/native-stack";

const pageValues = ['Home', 'Transactions', 'NotFound', 'CreateTransaction'] as const;
type Page = typeof pageValues[number];

export type RootStackParamList = Record<Page, undefined>;
export type ScreenProps = NativeStackScreenProps<RootStackParamList>;

export const navigationConfig: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Home: '/',
      Transactions: 'transactions',
      CreateTransaction: 'transactions/create',
      NotFound: '*',
    },
  },
};

