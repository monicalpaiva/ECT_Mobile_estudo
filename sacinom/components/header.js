import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function header(){
  return (
      <View style={styles.header}>
        <Text>Histórias</Text>
        <View style={styles.icones}>
          <FontAwesome5 name="search" size={24} color="white"/>
          <FontAwesome5 name="home" size={24} color="white"/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
header:{
    height:50,
    padding:10,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: "row",
  },
icones:{
  justifyContent: 'space-between',
  flexDirection: "row",
}
});


