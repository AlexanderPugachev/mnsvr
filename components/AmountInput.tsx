import React from "react";
import {TextInput} from "react-native-paper";
import {FieldPath, useController, useFormContext} from "react-hook-form";

interface Props<Form> extends Omit<React.ComponentProps<typeof TextInput>, 'label' | 'onChangeText' | 'value'> {
    name: FieldPath<Form>;
    label?: string;
}

export const AmountInput = <Form extends object>({ name, label, ...props }: Props<Form>) => {
    const { control } = useFormContext();
    const { field } = useController({control, name});
    return <TextInput
        label={label}
        value={field.value}
        onChangeText={(value) => field.onChange(value.replace(/[^0-9]/g, ''))}
        {...props}
    />
}