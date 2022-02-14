import { AmountInput, SelectInput, TextInput, View } from "components";
import { useForm, FormProvider } from "react-hook-form";
import { Chip, TextInput as PaperTextInput } from "react-native-paper";
import { ScreenProps } from "../navigation";
import { Transaction } from "models/Transaction";
import tw from "tailwind-react-native-classnames";
import React, { useMemo, useState } from "react";
import { accountDictionary, categoryDictionary } from "models/dictionaries";
import { KeyboardAvoidingView, SafeAreaView, ScrollView } from "react-native";

type FormState = Omit<Transaction, "id">;

export function CreateTransactionModal(props: ScreenProps) {
  const form = useForm<FormState>({ defaultValues: { currency: "RUB" } });

  console.log("form", form.getValues());

  return (
    <FormProvider {...form}>
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        keyboardVerticalOffset={100}
        style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
      >
        <ScrollView style={styles.inputWrapper}>
          <AmountInput<FormState>
            style={[styles.input, styles.firstInput]}
            name={"amount"}
            label={"Amount"}
            keyboardType={"numeric"}
            autoComplete={false}
          />

          <TextInput<FormState>
            style={styles.input}
            label={"Currency"}
            autoComplete={false}
            disabled
            defaultValue={"RUB"}
            name={"currency"}
          />

          <SelectInput<FormState>
            options={categoryDictionary}
            name={"category"}
            autoComplete={false}
            label={"Category"}
            style={styles.input}
          />

          <SelectInput<FormState>
            options={accountDictionary}
            name={"account"}
            autoComplete={false}
            label={"Account"}
            style={styles.input}
          />

          <TextInput<FormState>
            style={styles.input}
            label={"Party"}
            autoComplete={false}
            name={"party"}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </FormProvider>
  );
}

const styles = {
  inputWrapper: tw.style("flex"),
  input: tw.style("my-3"),
  firstInput: tw.style("mt-4"),
  chipWrapper: tw.style("flex flex-wrap flex-row"),
  chip: tw.style("mx-1")
};
