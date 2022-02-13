import {StyleSheet} from 'react-native';

import {Text, View} from 'components';
import {useState} from "react";
import {Transaction} from "models/Transaction";
import {ScreenProps} from "../navigation";


const TransactionDiv = (props: Transaction) => {
    return (
        <>
            {props.amount} {props.party} {props.account}
        </>
    )
}

export function TransactionsScreen(props: ScreenProps) {
    const [transactions, setTransactions] = useState<Transaction[]>();

    return (
        <View style={styles.container}>
            <Text>place for transaction list</Text>
            {transactions?.map(it => (
                <TransactionDiv key={it.id} {...it}/>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
