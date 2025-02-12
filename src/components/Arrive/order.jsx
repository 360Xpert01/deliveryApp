import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Food from '../../assest/food.png'




const Order = () => {
  return (
    <View style={styles.container}>
      <View style={styles.foodContainer}>
        <Image source={Food} style={styles.foodImage} />
        <Text style={styles.orderText}>ORD-2023-4578</Text>
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
    borderRadius: 20, // Makes it circular if needed
    marginRight: 10,
  },
  orderText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconContainer: {
    padding: 5,
  },
});

export default Order;
