import {AmountInput, TextInput, View} from 'components';
import {useForm, useFormContext, useController, FormProvider} from "react-hook-form";
import {Chip, Divider, Searchbar, Surface} from "react-native-paper";
import {ScreenProps} from "../navigation";
import {Transaction} from "models/Transaction";
import tw from "tailwind-react-native-classnames";
import React, {useState} from "react";

type FormState = Omit<Transaction, 'id'>;

const values = ['first', 'second'];

export function CreateTransactionModal(props: ScreenProps) {
    const form = useForm<FormState>({defaultValues: {currency: 'RUB'}});
    const [searchValues, setValues] = useState(values);

    console.log('form', form.getValues());

    return (
        <View>
            <FormProvider {...form}>

                <Divider style={tw.style(['p-2'])}/>
                <AmountInput<FormState> name={'amount'} label={'Amount'} keyboardType={'numeric'} autoComplete={false}/>

                <Divider style={tw.style(['p-2'])}/>
                <TextInput<FormState> label={'Currency'} autoComplete={false} disabled defaultValue={'RUB'} name={'currency'}/>

                <Divider style={tw.style(['p-2'])}/>
                <TextInput<FormState> label={'Category'} autoComplete={['first', 'second']} name={'category'} onAfterChangeText={(value) => {
                    setValues(values.filter(it => it.includes(value)));
                }}/>

                <Divider style={tw.style(['p-2'])}/>
                <Surface style={tw.style('flex')}>
                {searchValues.map((it, index) => (
                    <Chip icon="information" key={index} onPress={() => {
                        form.setValue('category', it);
                        setValues([it])
                    }}>{it}</Chip>
                ))}
                </Surface>

                <Divider style={tw.style(['p-2'])}/>
                <TextInput<FormState> label={'Account'} autoComplete={false} name={'account'}/>

                <Divider style={tw.style(['p-2'])}/>
                <TextInput<FormState> label={'Party'} autoComplete={false} name={'party'}/>

            </FormProvider>
            {/* Use a light status bar on iOS to account for the black space above the modal */}
            {/*<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />*/}

        </View>
    );
}