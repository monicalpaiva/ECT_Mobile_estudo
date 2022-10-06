import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/header';
import Conteudo from './components/conteudo';
import Rodape from './components/rodape';
import Navegacao from './components/navegacao';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Navegacao />
      <Conteudo />
      <Rodape />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    marginTop: Constants.statusBarHeight,
  }
});

