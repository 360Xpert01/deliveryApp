import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const dish = require('../../../assets/dish.png');
const ellipse = require('../../../assets/Ellipse.png');
const LocationIcon = require('../../../assets/location.png');
const backButton = require('../../../assets/backbutton.png');

const OrderSelectionScreen = ({ codId, location, orderId }) => {
  const orders = [
    { id: '01', orderId: 'KHI 123545689713', address: '14th Street Pizza Co. Block-7, Gulshan-E-Iqbal', cod: 'COD 11,999' },
    { id: '02', orderId: 'KHI 646543218798', address: 'Gohar Heaven, Block-6, Gulshan-E-Iqbal', cod: 'COD 1,000' }
  ];
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedOrder, onSelect } = route.params;

  const handleOrderSelect = (order) => {
    onSelect(order);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backButton} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Active Loads</Text>
      </View>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.orderItem, item.id === selectedOrder.id && styles.activeOrder]}
            onPress={() => handleOrderSelect(item)}
          >
            <View style={styles.cardContent}>
              <View style={styles.header}>
                <View style={styles.row}>
                  <Image source={dish} style={{ width: 20, height: 20 }} />
                <Text style={styles.orderId}>{orderId}</Text> 
                </View>
                <Text style={styles.cod}>COD {codId}</Text>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>{location}</Text>
                </View>
              </View>
              <View style={styles.addressContainer}>
                <View style={styles.addressRow}>
                  <Image source={ellipse} style={styles.ellipse} />
                  <Text style={styles.addressText}>
                    14th Street Pizza Co. Block-7, Gulshan-e-Iqbal
                  </Text>
                </View>
                <View style={styles.addressRow}>
                  <Image source={LocationIcon} style={{ width: 18, height: 18 }} />
                  <Text style={styles.addressText}>
                    B 121 Block 2, Gulshan-e-Iqbal, Karachi
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    paddingTop: hp('2%'),
  },
  title: {
    fontSize: wp('10%'),
    fontWeight: 'bold',
    color: 'black',
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: wp('2%'),
    marginBottom: hp('5%'),
  },
  backIcon: {
    width: wp('20%'),  // Increase width
    height: wp('20%'), // Increase height (same as width for proper scaling)
  },
  orderItem: {
    width: '100%',
    marginVertical: hp('1%'),
  },
  cardContent: {
    backgroundColor: "white",
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp('5%'),
  },
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  orderId: {
    fontSize: wp('4%'),
    fontWeight: "bold",
    marginLeft: wp('2%'),
  },
  cod: {
    fontSize: wp('4%'),
    fontWeight: "bold",
    color: "#00AA2F",
  },
  addressContainer: {
    marginTop: hp('1%'),
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp('1%'),
  },
  addressText: {
    marginLeft: wp('2%'),
    fontSize: wp('3.5%'),
    color: "#333",
  },
  iconSize: {
    width: wp('5%'),
    height: wp('5%'),
  },
  tag: {
    backgroundColor: "#E0F7FA",
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("0.5%"),
    borderRadius: wp("2%"),
  },
  tagText: {
    fontSize: wp("3%"),
    color: "#00AA2F",
  },
});

export default OrderSelectionScreen;
