import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../modules/Restaurant';
import ProductsList from '../components/ProductsList';

const Restaurant = ({route, navigation}) => {
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    const {item} = route.params;
    setRestaurant(item);
  }, []);

  return (
    <>
      {restaurant && (
        <View style={styles.wrapper}>
          <Header restaurant={restaurant} navigation={navigation} />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Products</Text>
            <ProductsList products={restaurant.meals} navigation={navigation} />
          </View>
        </View>
      )}
    </>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  titleWrapper: {height: '100%', paddingBottom: 200},
  title: {
    paddingTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
    paddingBottom: 20,
  },
});
