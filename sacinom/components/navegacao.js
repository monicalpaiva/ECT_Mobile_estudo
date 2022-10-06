import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function conteudo() {
  return (
    <View style={styles.navegacao}>
        <FontAwesome5 name="hand-point-left" size={24}/>
        <Text style={styles.titulo}>Autores</Text>
        <FontAwesome5 name="hand-point-right" size={24}/>
    </View>
  );
}

const styles = StyleSheet.create({
  navegacao:{
    flexDirection: "row",
    height:50,
    padding:10,
    backgroundColor: '#00ff00', 
    alignContent: 'center',
    justifyContent: 'space-between',
  }
});


