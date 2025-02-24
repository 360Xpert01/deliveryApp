import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useOrder } from '../../CountContext/orderContext'; // Import context
import Map from '../../components/Map';
import CancelButton from '../../components/Arrive/cancelButton';
import PickButton from '../../components/Arrive/pickButton';
import Arrow from '../../components/Arrive/arrow';
import COD from '../../components/Arrive/cash';
import Location from '../../components/Arrive/location';
import Order from '../../components/Arrive/order';
import Pick from '../../components/Arrive/pick';
import Customer from '../../components/Pick/customer';
import Locate from '../../components/Pick/locate';
import Distance from '../../components/Pick/distance';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import MultipleOrder from '../../components/multipleOrder/multipleOrderCard';
import { useOrderContext } from '../../CountContext/newOrderContext';

const { width, height } = Dimensions.get('window');

const pickupPoints = [
  { latitude: 24.897345, longitude: 67.081231 }, // Example Pickup Point 1
  { latitude: 24.882123, longitude: 67.065432 }, // Example Pickup Point 2
  { latitude: 24.875678, longitude: 67.072345 }, // Example Pickup Point 3
];

const PickScreen = () => {
  const navigation = useNavigation();
  const { count } = useOrderContext(); // Get count from context
  console.log("count" + count);

  return (
    <View style={styles.container}>
      <Map showHelmet={true} showLine={true} pickupPoints={pickupPoints} />
      {count > 1 && (
        <View style={styles.multiCard}>
          <MultipleOrder />
        </View>
      )}
      <View style={styles.overlay}>
        <View style={styles.section}>
          <PickButton />
          <Arrow />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.orderSec}>
            <Order />
            <View style={styles.whatsapp}>
              <WhatsAppIcon />
            </View>
          </View>
          <View style={styles.line} />
          <Location />
          <View style={styles.verticle} />
          <Locate />
          <Distance />
          <View style={styles.line} />
          <Customer />
          <View style={styles.line} />
          <COD />
          <View style={styles.btnRow}>
            <CancelButton onPress={() => navigation.navigate('Arrived')} />
            <Pick onPress={() => navigation.navigate('Delivered')} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: width * 0.08,
    borderTopRightRadius: width * 0.08,
    padding: width * 0.05,
    elevation: 10,
  },
  verticle: {
    height: height * 0.04,
    borderLeftWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    marginLeft: width * 0.04,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: width * 0.05,
    marginTop: height * 0.01,
  },
  line: {
    marginVertical: height * 0.007,
    height: 1,
    backgroundColor: '#E4E4E4',
    width: '100%',
  },
  orderSec: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  whatsapp: {
    padding: width * 0.025,
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 5,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: height * 0.1,
    paddingHorizontal: width * 0.05,
  },
  multiCard: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    top: height * 0.3,
    zIndex: 10,
  },
});

export default PickScreen;
