import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const MainContent = ({item}) => {
  const {photoUrl, price, description, weight, calories} = item;
  return (
    <View style={styles.wrapper}>
      <Image source={{uri: photoUrl}} resizeMode="contain" style={styles.img} />
      <Text style={styles.description}>{description}</Text>
      <View style={styles.extraInfoWrapper}>
        <Text style={styles.extraInfo}>
          {weight} g | {calories} cal
        </Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainContent;

const styles = StyleSheet.create({
  wrapper: {padding: 10},
  img: {width: 300, borderRadius: 70, height: 300, alignSelf: 'center'},
  description: {
    fontSize: 17,
    paddingTop: 10,
    paddingBottom: 20,
    color: '#262626',
  },
  extraInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  extraInfo: {fontSize: 15, color: '#262626'},
  price: {fontSize: 15, fontWeight: 'bold', color: '#262626'},
  btn: {
    height: 40,
    marginTop: 40,
    backgroundColor: '#41b44d',
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btnText: {
    fontSize: 20,
    letterSpacing: 2,
    color: '#F6F6F6',
  },
});
