import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import { HomeScreen, TransactionsScreen, CreateTransactionModal, NotFoundScreen } from "screens";
import * as React from "react";
import {IconButton} from "react-native-paper";


const pageValues = ['Home', 'Transactions', 'NotFound', 'CreateTransaction'] as const;
type Page = typeof pageValues[number];
type RootStackParamList = Record<Page, undefined>;

export type ScreenProps = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {

    return (
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
            <Stack.Screen name="Transactions" component={TransactionsScreen} options={({navigation}) => ({
                headerRight: () => (
                    <IconButton onPress={() => navigation.navigate('CreateTransaction')} icon={'plus'} />
                )
            })}/>

            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen name="CreateTransaction" component={CreateTransactionModal}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}