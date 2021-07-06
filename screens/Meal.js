import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Header from '../modules/Meal/Header';
import MainContent from '../modules/Meal/MainContent';

const Meal = ({navigation, route}) => {
  const [meal, setMeal] = useState();

  useEffect(() => {
    const {item} = route.params;
    setMeal(item);
  }, []);

  return (
    <View>
      {meal && (
        <>
          <Header name={meal.name} navigation={navigation} />
          <MainContent item={meal} />
        </>
      )}
    </View>
  );
};

export default Meal;
