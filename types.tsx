//
// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//   }
// }
//
// export type RootStackParamList = {
//   Home: NavigatorScreenParams<RootTabParamList> | undefined;
//   Transactions: undefined;
//   Modal: undefined;
//   NotFound: undefined;
// };
//
// export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
//   RootStackParamList,
//   Screen
// >;
//
// export type RootTabParamList = {
//   TabOne: undefined;
//   TabTwo: undefined;
// };
//
// export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
//   BottomTabScreenProps<RootTabParamList, Screen>,
//   NativeStackScreenProps<RootStackParamList>
// >;

