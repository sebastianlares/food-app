/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const Categories = ({categoryHandler, selectedCategory, categories}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => categoryHandler(item)}>
        <View
          style={{
            ...styles.btn,
            backgroundColor:
              !selectedCategory && item.name === 'all'
                ? '#D8B4A0'
                : selectedCategory?.category === item.name
                ? '#D8B4A0'
                : '#eaede8',
          }}>
          <Image source={item.icon} resizeMode="contain" style={styles.img} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={styles.h2}>Main Categories</Text>
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={() => `${Math.random()}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: 5 * 2}}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  touchable: {
    padding: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {width: 30, height: 30},
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
