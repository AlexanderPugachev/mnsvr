import {StyleSheet} from 'react-native';

import {Text, View} from 'components';
import {useState} from "react";
import {Transaction} from "models/Transaction";
import {ScreenProps} from "../navigation";

interface Props extends ScreenProps {
    title?: string
}

const TransactionDiv = (props: Transaction) => {
    return (
        <>
            {props.amount} {props.party} {props.account}
        </>
    )
}

export function TransactionsScreen({title}: Props) {
    const [transactions, setTransactions] = useState<Transaction[]>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title ?? 'transactions'}</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            {transactions?.map(it => (
                <TransactionDiv key={it.id} {...it}/>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
