import React, { memo, useMemo, useState } from "react";
import { Category, Transaction, TransactionId } from "models";
import { categoryDictionary, unknownCategory } from "dictionaries";
import { List } from "react-native-paper";
import { Text } from "./Themed";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Pressable, View } from "react-native";
import { transactionSlice, useActions } from "store";
import tw from "tailwind-react-native-classnames";
import useColorScheme from "../hooks/useColorScheme";
import { ScreenProps } from "navigation";

export const TransactionListItem = memo(
  ({ category, navigation, route, ...props }: Transaction & ScreenProps) => {
    const theme = useColorScheme();
    const { deleteItem } = useActions(transactionSlice.actions);
    const [isIncome, setIsIncome] = useState(false);

    const currentCategory = useMemo<Category>(() => {
      const current = categoryDictionary.find((it) => it.name === category) ?? unknownCategory;
      setIsIncome(current.direction === "INCOME");
      return current;
    }, [category]);

    const LeftSwipeActions = () => {
      return (
        <View style={styles.leftActions[theme]}>
          <Pressable
            onPress={() =>
              navigation.navigate("Transaction", {
                mode: "edit",
                transaction: { category, ...props }
              })
            }
          >
            <List.Icon icon={"pencil"} color={styles.actionIcon[theme]} />
          </Pressable>
        </View>
      );
    };

    const rightSwipeActions = (id: TransactionId) => {
      return (
        <View style={styles.rightActions[theme]}>
          <Pressable onPress={() => deleteItem(id)}>
            <List.Icon icon={"delete"} color={styles.actionIcon[theme]} />
          </Pressable>
        </View>
      );
    };

    return (
      <Swipeable
        renderLeftActions={LeftSwipeActions}
        renderRightActions={() => rightSwipeActions(props.id)}
      >
        <List.Item
          title={`${isIncome ? "+" : "-"}${props.amount} (${props.party})`}
          description={currentCategory.name}
          left={() => <List.Icon icon={currentCategory.icon} />}
          right={() => <Text>{props.amount}</Text>}
          style={styles.listItem[theme]}
        />
      </Swipeable>
    );
  }
);

const styles = {
  rightActions: {
    light: tw.style("bg-red-500 justify-center items-end"),
    dark: tw.style("bg-red-600 justify-center items-end")
  },
  leftActions: {
    light: tw.style("bg-green-500 justify-center items-end"),
    dark: tw.style("bg-green-600 justify-center items-end")
  },
  actionIcon: {
    light: tw.color("white"),
    dark: tw.color("black")
  },
  listItem: {
    light: tw.style("bg-white"),
    dark: tw.style("bg-black")
  }
};
