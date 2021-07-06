import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {back, search} from '../../constants/icons';

const Header = ({restaurant, navigation}) => {
  const {name, category, delivery} = restaurant;
  return (
    <View>
      <View style={styles.headerWrapper}>
        <View style={styles.iconsWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={back} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.title}>{name}</Text>
          <TouchableOpacity>
            <Image source={search} style={{...styles.icon, paddingRight: 5}} />
          </TouchableOpacity>
        </View>
        <View style={styles.detailsWrapper}>
          <Text style={styles.lefth4}>{`${category}s`}</Text>
          <Text style={styles.righth4}>{delivery} min</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    padding: 10,
    paddingTop: 30,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    height: 120,
    backgroundColor: '#41b44d',
  },
  iconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  icon: {width: 20, height: 20, tintColor: 'white'},
  title: {
    fontSize: 23,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#f6f6f6',
  },
  detailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  lefth4: {
    fontSize: 18,
    textTransform: 'capitalize',
    color: '#f6f6f6',
  },
  righth4: {fontSize: 16, color: '#f6f6f6'},
});
