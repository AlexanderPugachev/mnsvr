import {Pressable, StyleSheet} from 'react-native';

import { Text, View, EditScreenInfo } from 'components';
import { RootTabScreenProps } from '../types';
import {FontAwesome} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import * as React from "react";

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Pressable
          onPress={() => navigation.navigate('Transactions')}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}>
        <FontAwesome
            size={16}
            style={{ marginRight: 15 }}
        >Transactions</FontAwesome>
      </Pressable>

      <Text style={styles.title}>Tab One</Text>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
