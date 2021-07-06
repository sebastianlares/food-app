/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {home, heart, user} from '../constants/icons';

const Tab = createBottomTabNavigator();

const tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.navigator,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={home}
              resizeMode="contain"
              style={{
                ...styles.tabIcon,
                tintColor: focused ? '#41B44D' : 'black',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={heart}
              resizeMode="contain"
              style={{
                ...styles.tabIcon,
                tintColor: focused ? '#41B44D' : 'black',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="user"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={user}
              resizeMode="contain"
              style={{
                ...styles.tabIcon,
                tintColor: focused ? '#41B44D' : 'black',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default tabs;

const styles = StyleSheet.create({
  navigator: {
    height: 50,
    borderTopWidth: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
    backgroundColor: 'white',
  },
  tabIcon: {
    width: 25,
    height: 25,
  },
});
