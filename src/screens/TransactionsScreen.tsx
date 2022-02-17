import { StyleSheet } from "react-native";

import { IconName, Text, View } from "components";
import { Category, Transaction } from "models";
import { ScreenProps } from "navigation";
import { useAllTransactions } from "store";
import { List } from "react-native-paper";
import * as React from "react";
import { categoryDictionary } from "dictionaries";
import { memo, useMemo } from "react";

const TransactionListItem = memo(({ category, ...props }: Transaction) => {
  const currentCategory = useMemo<Category>(() => {
    const defaultCategory = categoryDictionary.find((it) => it.name === "unknown") as Category;
    return categoryDictionary.find((it) => it.name === category) ?? defaultCategory;
  }, [category]);
  return (
    <List.Item
      title={`${currentCategory.type === "INCOME" ? "+" : "-"}${props.amount} (${props.party})`}
      description={`[${currentCategory.name}]`}
      left={() => <List.Icon icon={currentCategory.icon} />}
      right={() => <Text>{props.amount}</Text>}
    />
  );
});

export function TransactionsScreen(props: ScreenProps) {
  const transactions = useAllTransactions();

  return (
    <>
      {transactions?.map((it) => (
        <TransactionListItem key={it.id} {...it} />
      ))}
    </>
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
