import { StyleSheet } from "react-native";

import { Text, View } from "components";
import { Transaction } from "models";
import { ScreenProps } from "navigation";
import { useAllTransactions } from "store";

const TransactionDiv = (props: Transaction) => {
  return (
    <Text>
      {props.amount} {props.party} {props.account}
    </Text>
  );
};

export function TransactionsScreen(props: ScreenProps) {
  const transactions = useAllTransactions();

  return (
    <View style={styles.container}>
      <Text>place for transaction list</Text>
      {transactions?.map((it) => (
        <TransactionDiv key={it.id} {...it} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
