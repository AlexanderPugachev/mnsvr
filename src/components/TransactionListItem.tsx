import React, { memo, useMemo, useState } from "react";
import { Category, Transaction } from "models";
import { categoryDictionary } from "dictionaries";
import { List } from "react-native-paper";
import { Text } from "./Themed";

export const TransactionListItem = memo(({ category, ...props }: Transaction) => {
  const [isIncome, setIsIncome] = useState(false);

  const currentCategory = useMemo<Category>(() => {
    const defaultCategory = categoryDictionary.find((it) => it.name === "unknown") as Category;
    const current = categoryDictionary.find((it) => it.name === category) ?? defaultCategory;
    setIsIncome(current.type === "INCOME");
    return current;
  }, [category]);

  return (
    <List.Item
      title={`${isIncome ? "+" : "-"}${props.amount} (${props.party})`}
      description={currentCategory.name}
      left={() => <List.Icon icon={currentCategory.icon} />}
      right={() => <Text>{props.amount}</Text>}
    />
  );
});
