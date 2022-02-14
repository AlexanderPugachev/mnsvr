import React, { FC, useMemo, useState } from "react";
import { TextInput } from "components/TextInput";
import { FieldPath, useController, useFormContext } from "react-hook-form";
import { Chip, Text, TextInput as PaperTextInput } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import { IconName } from "components/Icon";
import { ScrollView, View } from "react-native";

interface AnyOption {
  name: string;
  icon: IconName;
}

interface Props<Form> extends Omit<React.ComponentProps<typeof TextInput>, "name"> {
  options: AnyOption[];
  name: FieldPath<Form>;
}

export const SelectInput = <Form extends object>({
  options,
  name,
  style,
  ...props
}: Props<Form>) => {
  const { control, setValue } = useFormContext();
  const { field } = useController({ control, name });

  const [filteredOptions, setFilteredOptions] = useState(options);

  const isFieldFilled = useMemo(() => {
    return filteredOptions.length === 1 && filteredOptions[0].name === field.value;
  }, [field.value]);

  return (
    <View style={[styles.inputWrapper, style, styles.inputWrapperImportant]}>
      <Text>{props.label}</Text>
      <TextInput<Form>
        right={isFieldFilled && <PaperTextInput.Icon name={filteredOptions[0].icon} />}
        name={name}
        onAfterChangeText={(value) => {
          setFilteredOptions(options.filter((it) => it.name.includes(value)));
        }}
        style={tw.style("hidden")}
        {...props}
      />

      <ScrollView style={styles.chipWrapper} horizontal>
        {filteredOptions.map((option, index) => (
          <Chip
            icon={option.icon}
            key={index}
            onPress={() => {
              setValue(name, option.name);
              // setFilteredOptions([option]);
            }}
            selected={field.value === option.name}
            style={styles.chip}
          >
            {option.name}
          </Chip>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = {
  inputWrapper: tw.style("mt-2"),
  inputWrapperImportant: tw.style("mb-0"),
  chipWrapper: tw.style("flex flex-nowrap flex-row pb-3 pt-1 mt-1"),
  chip: tw.style("mx-1")
};
