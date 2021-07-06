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

const RestaurantsList = ({restaurants, currentRestaurant, navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{marginBottom: 40}}
        onPress={() =>
          navigation.navigate('Restaurant', {
            item,
          })
        }>
        <View>
          <Image
            source={{uri: item.photoUrl}}
            resizeMode="cover"
            style={styles.renderItemImg}
          />
          <View style={styles.description}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.textContainer}>
              <Text style={styles.categoryText}>{`${item.category}s`}</Text>
              <Text style={styles.deliveryText}>{item.delivery} min</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {currentRestaurant.length !== 0 ? (
        <FlatList
          data={currentRestaurant}
          keyExtractor={() => Math.random()}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: 5 * 2}}
        />
      ) : (
        <FlatList
          data={restaurants}
          keyExtractor={() => Math.random()}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: 5 * 2}}
        />
      )}
    </>
  );
};
export default RestaurantsList;

const styles = StyleSheet.create({
  renderItemImg: {
    width: '100%',
    height: 200,
    borderRadius: 25,
  },
  description: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    opacity: 0.65,
    width: '50%',
    borderTopRightRadius: 40,
  },
  title: {
    color: 'black',
    textTransform: 'uppercase',
    fontSize: 25,
    letterSpacing: 2,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingTop: 10,
  },
  textContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  categoryText: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 15,
    paddingBottom: 10,
  },
  deliveryText: {
    color: 'black',
    fontSize: 15,
    paddingBottom: 10,
  },
});
