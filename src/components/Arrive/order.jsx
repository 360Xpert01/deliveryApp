import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Food from '../../assest/food.png'
import themes from '../../theme/theme';




const Order = ({orderNum}) => {
  return (
    <View style={styles.container}>
      <View style={styles.foodContainer}>
        <Image source={Food} style={styles.foodImage} />
        <Text style={[styles.orderText, { color: themes.greenLight.text }]}>{orderNum}</Text>
      </View>
      <View style={styles.iconContainer}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  foodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  foodImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  orderText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  iconContainer: {
    padding: 5,
  },
});

export default Order;
