import React, {FC} from 'react';
import {StyleSheet, View} from "react-native";

interface PropTypes {
}

export const Screen: FC<PropTypes> = ({ children}) => {
    return (
        <View style={styles.layout}>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    layout: {
        marginVertical: 50,
    },
    content: {
        paddingVertical: 20,
    },
});