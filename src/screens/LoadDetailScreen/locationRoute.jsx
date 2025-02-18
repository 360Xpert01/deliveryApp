import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Map from '../../components/Map';
import {useTheme} from '../../theme/themeContext';
import {useNavigation, useRoute} from '@react-navigation/native';
const food = require("../../assest/food.png")
import WhatsAppIcon from '../../components/WhatsAppIcon';
// import { useRoute } from '@react-navigation/native';

const backButton = require('../../../assets/backbutton.png');

const LocationRoute = ({route}) => {
const {item} = route.params;
// console.log("itemsfdfs",item)

  return (
    <View style={styles.container}>
 
  </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1}
});

export default LocationRoute;
