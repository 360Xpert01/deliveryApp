import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import themes from '../../theme/theme';

const NewOrder = () => {
  return (
    <View style={[styles.container, {backgroundColor:themes.greenLight.button}]}>
      <View style={styles.orderNumContainer}>
        <Text style={styles.orderNum}>01</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.orderId}>KHI 123545689713</Text>
        <Text style={styles.address}>14th Street Pizza Co. Block-7, Gulshan-E-Iqbal</Text>
      </View>
      <Text style={styles.cod}>COD 11,999</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  orderNumContainer: {
    backgroundColor: 'black',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    marginRight: 10,
  },
  orderNum: {
    color: 'white',
    fontWeight: 'bold',
  },
  detailsContainer: {
    flex: 1,
  },
  orderId: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  address: {
    color: 'white',
    fontSize: 12,
  },
  cod: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewOrder;
