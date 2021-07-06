import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const ProductsList = ({products, navigation}) => {
  const renderItem = ({item}) => {
    const {photoUrl, price, description, name} = item;
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Meal', {
              item,
            })
          }>
          <View style={styles.productWrapper}>
            <Image
              source={{uri: photoUrl}}
              resizeMode="cover"
              style={styles.img}
            />
            <View style={styles.textWrapper}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.description}>{description}</Text>
              <Text style={styles.price}>${price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={products}
        keyExtractor={() => Math.random()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  wrapper: {padding: 10},
  productWrapper: {
    width: '100%',
    backgroundColor: '#eaede8',
    borderRadius: 15,
    padding: 5,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  textWrapper: {flex: 1, padding: 5},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: '#41b44d',
  },
  description: {fontSize: 12, color: '#262626'},
  price: {fontSize: 15, fontWeight: 'bold', paddingTop: 5},
});
