import React, {FC} from 'react';
import {TextInput as PaperTextInput} from "react-native-paper";
import {useController, useFormContext, FieldPath} from "react-hook-form";

interface Props<Form> extends Omit<React.ComponentProps<typeof PaperTextInput>, 'label' | 'onChangeText' | 'value'> {
    name: FieldPath<Form>;
    label?: string;
    onAfterChangeText?: (value: string) => void;
}

export const TextInput = <Form extends object>({ name, label, onAfterChangeText, ...props }: Props<Form>) => {
    const { control } = useFormContext();
    const { field } = useController({control, name});
    return <PaperTextInput
        label={label}
        value={field.value}
        onChangeText={(value) => {
            field.onChange(value);
            onAfterChangeText?.(value);
        }}
        {...props}
    />
}