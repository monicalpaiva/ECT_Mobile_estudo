import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image source={require('./assets/imagens/pinguim.png')} style={styles.imagem}/>
        <FontAwesome5 name="file" size={24} color="black"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    marginTop: Constants.statusBarHeight,
  },
  header:{
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#ffff',
    alignItems: "center",
    justifyContent: "space-between",
  },
  imagem: {
    height: 100,
    width: 100,
  }
});


