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
        <Text>ESTUDOS</Text>
      </View>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Aula 01</Text>
        <Text style={styles.explicacao}>Todo conteudo encontra-se no App.js, podemos dividir na parte de importações, 
          na parte de conteudo que fica na função que tem o mesmo nome do aquivo "App.js" e
          temos também a parte de estilo do conteúdo.
          Temos também todo o diretório "node_modules", mas ao subir ao diretório git,
          ele será ignorado pelo .gitignore.
          {"\n"}
          O "View" vai agrupar vários elementos. alignItems é a 
          estilação na orientção em linha, já o justifyContent ajusta no sentido de coluna. Quanto ao flex, será o
          o quanto deseja que o conteudo ocupe o espaço, caso seja flex: 1, o conteúdo se expandirá ao máximo do espaço.
          Caso esse flex não seja atribuido, o conteúdo ocupara apenas o espaço que ele precisa.
          {"\n"}
               As imagens podem ser atribuidas tanto da internet como dos próprios arquivos, offline.
          Ao buscar pela internet a estutura terá url e quando buscada dos próprios arquivos do projeto será buscada pelo require.
          {"\n"}
          <View style={styles.containerImgem}>
            <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
            <Image source={require('./assets/imagens/pinguim.png')}/>
          </View>
        </Text>
      </View>
      <View style={styles.rodape}>
        <Text>By Monica Lima de Paiva</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    marginTop: Constants.statusBarHeight,
    justifyContent: 'space-between',
  },
  header:{
    height:50,
    padding:10,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  conteudo: {
    flex: 1,
    height:100,
    padding:5,
    backgroundColor: '#fafad2',
    alignItems: 'center',
  },
  rodape:{
    height:50,
    padding:10,
    backgroundColor: '#008000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  explicacao:{
    textAlign: 'justify',  
    letterSpacing: 3,
  },
  titulo:{
    padding: 5,
    marginBottom: 5,
    textShadowColor: '#8b0000' ,
    backgroundColor: 'lightgrey',
  },
  containerImgem:{
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});


