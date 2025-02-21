import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const orders = [
  { id: '01', orderId: 'KHI 123545689713', address: '14th Street Pizza Co. Block-7, Gulshan-E-Iqbal', cod: 'COD 11,999' },
  { id: '02', orderId: 'KHI 646543218798', address: 'Gohar Heaven, Block-6, Gulshan-E-Iqbal', cod: 'COD 1,000' }
];

const MultipleOrder = () => {
  const navigation = useNavigation();
  const [selectedOrder, setSelectedOrder] = useState(orders[0]);

  const handleOpenOrderPage = () => {
    navigation.navigate('OrderSelection', { selectedOrder, onSelect: setSelectedOrder });
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleOpenOrderPage}>
      <View style={styles.orderNumContainer}>
        <Text style={styles.orderNum}>{selectedOrder.id}</Text>
      </View>
      <View style={styles.lines}>
        <View style={[styles.VerticalLine, selectedOrder.id === '01' ? styles.activeLine : styles.inactiveLine]} />
        <View style={[styles.VerticalLine, selectedOrder.id === '02' ? styles.activeLine : styles.inactiveLine]} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.orderId}>{selectedOrder.orderId}</Text>
        <Text style={styles.address}>{selectedOrder.address}</Text>
      </View>
      <Text style={styles.cod}>{selectedOrder.cod}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00B120',
    padding: 12,
    borderRadius: 10,
    margin: 10,
    gap: 8
  },
  lines: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 4
  },
  VerticalLine: {
    width: 2,
    height: 25,
    borderWidth: 1,
  },
  activeLine: {
    borderColor: '#FFFFFF'
  },
  inactiveLine: {
    borderColor: '#808080'
  },
  orderNumContainer: {
    backgroundColor: '#000000',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 2
  },
  orderNum: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  detailsContainer: {
    flex: 1
  },
  orderId: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  address: {
    color: '#FFFFFF',
    fontSize: 12
  },
  cod: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MultipleOrder;


