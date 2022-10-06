import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

export default function conteudo() {
const autores = [
    {
        id: 1,
        nome: 'autor 01',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lacus sollicitudin, scelerisque libero non, pellentesque nibh.Praesent imperdiet nulla orci, ac sodales nulla efficitur at. Aliquam at velit et ipsum venenatis facilisis a a libero. Fusce faucibus, est ornare sodales sollicitudin, risus neque rhoncus lorem, a molestie neque nunc in odio. Mauris tincidunt vestibulum posuere. Morbi imperdiet dignissim ultricies. Ut dui tellus, posuere egestas urna sit amet, convallis volutpat diam. Cras consectetur turpis velit.',
        src: require('../assets/imagens/monica.jpg'),
    },
    {
        id: 2,
        nome: 'autor 01',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lacus sollicitudin, scelerisque libero non, pellentesque nibh. Praesent imperdiet nulla orci, ac sodales nulla efficitur at. Aliquam at velit et ipsum venenatis facilisis a a libero. Fusce faucibus, est ornare sodales sollicitudin, risus neque rhoncus lorem, a molestie neque nunc in odio. Mauris tincidunt vestibulum posuere. Morbi imperdiet dignissim ultricies. Ut dui tellus, posuere egestas urna sit amet, convallis volutpat diam. Cras consectetur turpis velit.',
        src: require('../assets/imagens/cebolinha.jpg'),
    },
    {
        id: 3,
        nome: 'autor 01',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lacus sollicitudin, scelerisque libero non, pellentesque nibh. Praesent imperdiet nulla orci, ac sodales nulla efficitur at. Aliquam at velit et ipsum venenatis facilisis a a libero. Fusce faucibus, est ornare sodales sollicitudin, risus neque rhoncus lorem, a molestie neque nunc in odio. Mauris tincidunt vestibulum posuere. Morbi imperdiet dignissim ultricies. Ut dui tellus, posuere egestas urna sit amet, convallis volutpat diam. Cras consectetur turpis velit.',
        src: require('../assets/imagens/franginha.jpg'),
    },
    {
        id: 4,
        nome: 'autor 01',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lacus sollicitudin, scelerisque libero non, pellentesque nibh. Praesent imperdiet nulla orci, ac sodales nulla efficitur at. Aliquam at velit et ipsum venenatis facilisis a a libero. Fusce faucibus, est ornare sodales sollicitudin, risus neque rhoncus lorem, a molestie neque nunc in odio. Mauris tincidunt vestibulum posuere. Morbi imperdiet dignissim ultricies. Ut dui tellus, posuere egestas urna sit amet, convallis volutpat diam. Cras consectetur turpis velit.',
        src: require('../assets/imagens/chicobento.jpg'),
    },
    {
        id: 5,
        nome: 'autor 01',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lacus sollicitudin, scelerisque libero non, pellentesque nibh. Praesent imperdiet nulla orci, ac sodales nulla efficitur at. Aliquam at velit et ipsum venenatis facilisis a a libero. Fusce faucibus, est ornare sodales sollicitudin, risus neque rhoncus lorem, a molestie neque nunc in odio. Mauris tincidunt vestibulum posuere. Morbi imperdiet dignissim ultricies. Ut dui tellus, posuere egestas urna sit amet, convallis volutpat diam. Cras consectetur turpis velit.',
        src: require('../assets/imagens/magali.jpg'),
    },
    {
        id: 6,
        nome: 'autor 01',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lacus sollicitudin, scelerisque libero non, pellentesque nibh. Praesent imperdiet nulla orci, ac sodales nulla efficitur at. Aliquam at velit et ipsum venenatis facilisis a a libero. Fusce faucibus, est ornare sodales sollicitudin, risus neque rhoncus lorem, a molestie neque nunc in odio. Mauris tincidunt vestibulum posuere. Morbi imperdiet dignissim ultricies. Ut dui tellus, posuere egestas urna sit amet, convallis volutpat diam. Cras consectetur turpis velit.',
        src: require('../assets/imagens/bidu.jpg'),
    }
];

function renderItem({item}){
    return <View style={styles.conteudo}>
            <Image source={item.src} style={styles.imagem}/>
            <Text>{item.nome}</Text>
            <Text style={styles.explicacao}>{item.descricao}</Text>
    </View>
}

  return (
    <View style={styles.conteudo}>
        <FlatList
            data={autores}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    backgroundColor: '#fafad2',
    alignItems: 'center',
  },
  imagem:{
    height: 50,
    width: 50,
  },
  explicacao:{
    textAlign: 'justify',  
    letterSpacing: 3,
  },
});


