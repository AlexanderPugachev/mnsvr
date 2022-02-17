import React, { FC } from "react";
import { TextInput as PaperTextInput } from "react-native-paper";
import { useController, useFormContext, FieldPath } from "react-hook-form";
import tw, { create } from "tailwind-react-native-classnames";

interface Props<Form>
  extends Omit<
    React.ComponentProps<typeof PaperTextInput>,
    "label" | "onChangeText" | "value" | "underlineColor"
  > {
  name: FieldPath<Form>;
  label?: string;
  onAfterChangeText?: (value: string) => void;
}

export const TextInput = <Form extends object>({
  name,
  label,
  onAfterChangeText,
  style,
  ...props
}: Props<Form>) => {
  const { control } = useFormContext();
  const { field } = useController({ control, name });
  return (
    <PaperTextInput
      label={label}
      value={field.value}
      onChangeText={(value) => {
        field.onChange(value);
        onAfterChangeText?.(value);
      }}
      onBlur={() => {
        if (!field?.value?.length) return;
        const value = field.value.trim();
        field.onChange(value);
        onAfterChangeText?.(value);
      }}
      style={[styles.main, style]}
      underlineColor={"none"}
      {...props}
    />
  );
};

const styles = {
  main: tw.style("rounded-xl")
};
