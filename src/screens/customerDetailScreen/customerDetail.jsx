import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Map from '../../components/Map';
import { useTheme } from '../../theme/themeContext';
import { useNavigation } from '@react-navigation/native';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import themes from '../../theme/theme';
import StatusOrder from '../../components/statusOrder';

const food = require("../../assest/food.png");
const backButton = require('../../../assets/backbutton.png');
const bullet = require('../../assest/bullet.png');
const location = require('../../assest/location.png');

const statusData = [
  { status: 'Order Created', createdDate: '2025/02/14', createdTime: '3:27:25' },
  { status: 'Order Accepted', createdDate: '2025/02/14', createdTime: '3:30:00' },
  { status: 'Rider Arrived', createdDate: '2025/02/14', createdTime: '3:35:14' },
  { status: 'Rider Picked', createdDate: '2025/02/14', createdTime: '3:40:00' },
  { status: 'Order Delivered', createdDate: '2025/02/14', createdTime: '3:50:30' },
  // { status: 'Order Completed', createdDate: '2025/02/14', createdTime: '4:00:00' },
];

const CustomerDetailsScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [animate, setAnimate] = useState(false);

  const isOrderCompleted = statusData[statusData.length - 1].status === 'Order Completed';

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={backButton} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Hide Map when Order is Completed */}
      {!isOrderCompleted && (
        <View style={styles.mapContainer}>
          <Map showHelmet={false} animate={animate} setAnimate={setAnimate} />
        </View>
      )}

      {/* Order Details */}
      <View style={[isOrderCompleted ? styles.detailsContainer2 : styles.detailsContainer, { backgroundColor: theme.surface }]}>
        <View style={styles.headerRow}>
          <Image source={food} style={styles.foodIcon} />
          <Text style={[styles.orderId, { color: theme.text.primary }]}>ORD-2023-4578</Text>
          <TouchableOpacity style={[styles.whatsappButton, { backgroundColor: theme.whatsapp }]}>
            <WhatsAppIcon />
          </TouchableOpacity>
        </View>

        {/* Order Locations */}
        <View style={styles.locationRow}>
          <Image source={bullet} style={styles.icon} />
          <Text style={[styles.locationText, { color: theme.text.secondary }]}>
            14th Street Pizza Co, Block-7, Gulshan-e-Iqbal
          </Text>
        </View>
        <View style={styles.locationRow}>
          <Image source={location} style={styles.icon} />
          <Text style={[styles.locationText, { color: theme.text.secondary }]}>
            B 121 Block 66, Gulshan-e-Iqbal, Karachi.
          </Text>
        </View>

        <Text style={[styles.distanceText, { color: theme.text.primary }]}>Distance: 1.6 Kms</Text>
        <Text style={styles.priceStatus}>PRE PAID</Text>

        <View style={styles.dealers}>
          <Text style={styles.delivered}>
            Delivered By: <Text style={styles.delivered2}>Umair Khan</Text>
          </Text>
          <Text style={styles.delivered}>
            Received By: <Text style={styles.delivered2}>Bilal Ahmed</Text>
          </Text>
        </View>

       {/* Order Status List */}
<ScrollView style={{ maxHeight: 200 }} contentContainerStyle={{ paddingBottom: 20 }}>
  {statusData.map((item, index) => (
    <StatusOrder key={index} status={item.status} createdDate={item.createdDate} createdTime={item.createdTime} />
  ))}
</ScrollView>


        {/* COD Price */}
        <Text style={[styles.priceText, { color: theme.text.primary }]}>
          COD: <Text style={{ color: theme.primary }}>11,999</Text>
        </Text>

        {/* Disable "Received COD" Button when Order is Completed */}
        <TouchableOpacity
          style={[
            styles.acceptButton,
            {
              backgroundColor: isOrderCompleted ? 'gray' : theme.primary,
              opacity: isOrderCompleted ? 0.6 : 1,
            },
          ]}
          onPress={() => {
            if (!isOrderCompleted) {
              setAnimate(true);
              navigation.navigate("All Order");
            }
          }}
          disabled={isOrderCompleted}
        >
          <Text style={[styles.acceptButtonText]}>
            Mark as Completed
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    borderRadius: 50,
  },
  backIcon: { width: 70, height: 70 },
  mapContainer: { flex: 1 },
  detailsContainer: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  detailsContainer2: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // position: 'absolute',
    marginTop:60,
    // height:'100%',
    marginBottom: 10,
    bottom: 0,
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  foodIcon: { width: 40, height: 40 },
  orderId: { fontSize: 18, fontWeight: 'bold', paddingRight: 40 },
  whatsappButton: {
    padding: 8,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  locationText: { marginLeft: 10, fontSize: 12, paddingVertical: 5 },
  icon: { width: 15, height: 15, marginRight: 5 },
  distanceText: { marginTop: 10, fontWeight: 'bold' },
  priceText: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  priceStatus: { fontSize: 16, color: themes.greenLight.primary, fontWeight: 'bold', marginTop: 6 },
  dealers: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  delivered: { fontSize: 12, fontWeight: 'bold' },
  delivered2: { fontSize: 12, fontWeight: '400' },
  acceptButton: {
    padding: 15,
    borderRadius: 42,
    alignItems: 'center',
    marginTop: 15,
  },
  acceptButtonText: { fontSize: 16, fontWeight: 'bold' , color:'white' },
});

export default CustomerDetailsScreen;
