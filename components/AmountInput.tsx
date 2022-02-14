import React from "react";
import { TextInput } from "react-native-paper";
import { FieldPath, useController, useFormContext } from "react-hook-form";
import tw from "tailwind-react-native-classnames";

interface Props<Form>
  extends Omit<
    React.ComponentProps<typeof TextInput>,
    "label" | "onChangeText" | "value" | "underlineColor" | "keyboardType"
  > {
  name: FieldPath<Form>;
  label?: string;
}

export const AmountInput = <Form extends object>({ name, label, style, ...props }: Props<Form>) => {
  const { control } = useFormContext();
  const { field } = useController({ control, name });
  return (
    <TextInput
      label={label}
      value={field.value ? String(field.value) : ""}
      onChangeText={(value) => field.onChange(Number(value.replace(/[^0-9]/g, "")))}
      style={[styles.main, style]}
      underlineColor={"none"}
      keyboardType={"numeric"}
      {...props}
    />
  );
};

const styles = {
  main: tw.style("rounded-xl")
};
