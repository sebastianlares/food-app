import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {back} from '../../../constants/icons';

const Header = ({name, navigation}) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={back} style={styles.img} />
          </TouchableOpacity>
          <Text style={styles.title}>{name}</Text>
          <TouchableOpacity />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 30,
    padding: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    height: 80,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  img: {width: 20, height: 20},
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#262626',
  },
});
