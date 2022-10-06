import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function textos() {
  return (
    <View style={styles.conteudoCentral}>
    <Text style={styles.titulo}>Titulo da história</Text>
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
    </Text>
    <Image source={require('../assets/imagens/pinguim.png')} style={styles.imagem}/>
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
    </Text>
    <Image source={require('../assets/imagens/pinguim.png')} style={styles.imagem}/>
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
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudoCentral:{
    flex: 1,
    height:100,
    padding:5,
    backgroundColor: '#fafad2',
    alignItems: 'center',
  },
  titulo:{
    padding: 25,
  },
  explicacao:{
    textAlign: 'justify',  
    letterSpacing: 3,
  },
  imagem:{
    height: 50,
    width: 50,
  }
});
