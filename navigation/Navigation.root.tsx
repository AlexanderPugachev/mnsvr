import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CreateTransactionModal, HomeScreen, NotFoundScreen, TransactionsScreen} from "screens";
import * as React from "react";
import {Button, IconButton} from "react-native-paper";
import {RootStackParamList} from "./Navigation.config";

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
                    <IconButton onPress={() => navigation.navigate('CreateTransaction')} icon={'plus'}/>
                )
            })}/>

            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen name="CreateTransaction" component={CreateTransactionModal}
                              options={({navigation}) => ({
                                  title: 'create transaction',
                                  headerRight: () => (
                                      <Button onPress={() => navigation.goBack()} uppercase={false}>Save</Button>
                                  ),
                                  headerLeft: () => (
                                      <Button onPress={() => navigation.goBack()} uppercase={false}>Cancel</Button>
                                  )
                              })}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}