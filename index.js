import {AppRegistry, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-elements';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
const DATA = [
  {
    id: '1',
    title: 'Pupusas',
    description:
      'La pupusa es una tortilla gruesa a base de masa de maíz o de arroz rellena con uno o más ingredientes, como queso, chicharrón, ayote, frijoles refritos, loroco, etc.',
    src: require('./src/imgs/1.jpg'),
  },
  {
    id: '2',
    title: 'Tamales',
    description:
      'El tamal es un alimento de origen precolombino, de las culturas mesoamericanas, preparado generalmente a base de masa de maíz o de arroz rellena de carnes, vegetales, salsas y otros ingredientes.',
    src: require('./src/imgs/2.jpg'),
  },
  {
    id: '3',
    title: 'Yuca frita',
    description:
      'Famoso tubérculo originario de Centro y Sur América, se consume mucho en El Salvador. Sabroso bocadillo que es común encontrarlo en cualquier restaurante y establecimiento de comida.',
    src: require('./src/imgs/3.jpg'),
  },
  {
    id: '4',
    title: 'Sopa de pata',
    description:
      'La sopa de patas es una preparación culinaria típica de El Salvador.1​ Su nombre se debe a que uno de los ingredientes que proporciona el caldo, son las patas de vaca, así como los callos o tripas; a veces suele sazonarse con zumo de limón y chile.',
    src: require('./src/imgs/4.jpg'),
  },
  {
    id: '5',
    title: 'Papas fritas',
    description:
      'Las papas fritas o patatas fritas, también conocidas como papas a la francesa o patatas a la francesa, son las patatas que se preparan cortándose en rodajas o en forma de bastones y friéndolas en aceite caliente hasta que queden doradas',
    src: require('./src/imgs/5.jpg'),
  },
];

const Item = ({title, description, img}) => (
  <Card containerStyle={styles.card}>
    <Card.Title style={styles.p}>{title}</Card.Title>
    <View
      style={{
        flexDirection: 'row',
      }}>
      <View
        style={{width: '50%', borderWidth: 0, borderColor: 'rgba(0,0,0,0)'}}>
        <Card
          containerStyle={{
            backgroundColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            width: '100%',
            borderColor: 'rgba(0,0,0,0)',
          }}>
          <Card.Image
            style={{
              borderRadius: 20,
            }}
            source={img}></Card.Image>
        </Card>
      </View>
      <View style={{width: '50%'}}>
        <Text
          style={{
            marginBottom: 10,
            color: '#fff',
            padding: 10,
            textAlign: 'justify',
            fontSize: 17,
          }}>
          {description}
        </Text>
      </View>
    </View>
  </Card>
);

const App = () => {
  const renderItem = ({item}) => (
    <Item title={item.title} description={item.description} img={item.src} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#560027',
  },
  img: {
    marginHorizontal: '25%',
    width: '50%',
    borderRadius: 10,
    display: 'flex',
    //resizeMode: 'contain'
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: '#fff',
    borderRadius: 10,
    borderWidth: 0,
    flexDirection: 'row',
  },
  p: {
    color: 'white',
    display: 'flex',
    fontSize: 25,
  },
});
AppRegistry.registerComponent('tipicos', () => App);
