import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useOrderContext } from '../../CountContext/newOrderContext';
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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const pickupPoints = [
  { latitude: 24.897345, longitude: 67.081231 },
  { latitude: 24.882123, longitude: 67.065432 },
  { latitude: 24.875678, longitude: 67.072345 },
];

const PickScreen = () => {
  const navigation = useNavigation();
  const { count } = useOrderContext(); // Get count from context
  console.log("count:", count);

  return (
    <View style={styles.container}>
      <Map showHelmet={true} showLine={true} pickupPoints={pickupPoints} />
      
      {/* Show Multi Order Card if count > 1 */}
      {count > 1 && (
        <View style={styles.multiCard}>
          <MultipleOrder />
        </View>
      )}

      <View style={styles.overlay}>
        {/* Adjust section positioning dynamically */}
        <View style={[styles.section, { marginBottom: count > 1 ? hp('7%') : hp('2%') }]}>
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
    borderTopLeftRadius: wp('8%'),
    borderTopRightRadius: wp('8%'),
    padding: wp('5%'),
    elevation: 10,
  },
  verticle: {
    height: hp('4%'),
    borderLeftWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    marginLeft: wp('4%'),
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: wp('5%'),
    marginTop: hp('1%'),
  },
  line: {
    marginVertical: hp('1%'),
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
    padding: wp('3%'),
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 5,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
  },
  multiCard: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    top: hp('30%'),
    zIndex: 10,
  },
});

export default PickScreen;
