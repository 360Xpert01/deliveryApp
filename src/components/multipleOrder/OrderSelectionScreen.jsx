import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
const dish = require('../../../assets/dish.png');
const ellipse = require('../../../assets/Ellipse.png');
const LocationIcon = require('../../../assets/location.png');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

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
        <Image source={backButton} style={styles.backIcon} />
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
    padding: 20,
    backgroundColor: 'shadow',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'black'
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  backIcon: {
    width: 80,
    height: 80,
  },
  orderItem: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  cardContent: {
    backgroundColor: "white",
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: wp("1%"),
    marginBottom: hp("1%"),
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  orderId: {
    fontSize: wp("3%"),
    fontWeight: "700",
    marginLeft: wp("1%"),
  },
  cod: {
    fontSize: wp("4%"),
    fontWeight: "700",
    color: "#00AA2F",
    lineHeight: hp("3%"),
    letterSpacing: 0.22,
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
  addressContainer: {
    marginTop: hp("0.5%"),
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp("0.5%"),
    borderRadius: wp("2%"),
    padding: wp("2%"),
    alignSelf: "flex-start",
  },
  addressText: {
    marginLeft: wp("1.5%"),
    fontSize: wp("3%"),
    fontWeight: "400",
    color: "#333",
  },
  ellipse: {
    width: wp("3%"),
    height: wp("3%"),
  },
});

export default OrderSelectionScreen;
