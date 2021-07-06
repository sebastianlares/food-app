import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {burger, food, pizza, salad, search, taco} from '../constants/icons';
import RestaurantsList from '../components/RestaurantList';
import Categories from '../components/FoodCategories';
import {getData} from '../firestore/services';

const categories = [
  {name: 'all', icon: food},
  {name: 'pizza', icon: pizza},
  {name: 'burger', icon: burger},
  {name: 'taco', icon: taco},
  {name: 'salad', icon: salad},
];

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerWrapper}>
        <TextInput placeholder="What are you looking for?" />
        <Image source={search} style={styles.icon} />
      </View>
    </View>
  );
};

const Home = ({navigation}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentRestaurant, setCurrentRestaurant] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const categoryHandler = r => {
    let restaurant = restaurants.filter(res => res.category === r.name);
    setCurrentRestaurant(restaurant);
    setSelectedCategory(...restaurant);
  };

  useEffect(() => {
    (async () => {
      const restaurantsData = await getData();
      setRestaurants(restaurantsData);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainWrapper}>
        <Categories
          categoryHandler={categoryHandler}
          selectedCategory={selectedCategory}
          categories={categories}
        />
        <RestaurantsList
          restaurants={restaurants}
          currentRestaurant={currentRestaurant}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 5,
  },
  header: {paddingBottom: 20, paddingTop: 20},
  headerWrapper: {
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#E8EAEE',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: 380,
    height: 38,
  },
  icon: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  mainWrapper: {
    height: '100%',
    paddingBottom: 80,
  },
});
