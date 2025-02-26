import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useOrder} from '../../CountContext/orderContext'; // Import context
import PickButton from '../../components/Arrive/pickButton';
import Arrow from '../../components/Arrive/arrow';
import Order from '../../components/Arrive/order';
import Location from '../../components/Arrive/location';
import COD from '../../components/Arrive/cash';
import Map from '../../components/Map';
import CancelButton from '../../components/Arrive/cancelButton';
import ArrivedButton from '../../components/Arrive/arrivedButton';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import MultipleOrder from '../../components/multipleOrder/multipleOrderCard';
import {useOrderContext} from '../../CountContext/newOrderContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Arrived = ({route}) => {
  const {item} = route.params;
  console.log("sergfsdgds",item)
  const {count} = useOrderContext();
  console.log('count' + count);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Map  showLine={false}/>

      {/* Show MultipleOrder card if count > 1 */}
      {count > 1 && (
        <View style={styles.multiCard}>
          <MultipleOrder />
        </View>
      )}

      <View
        style={[styles.section, {bottom: count > 1 ? hp('45%') : hp('30%')}]}>
        <PickButton />
        <Arrow />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.orderSec}>
          <Order orderNum={item?.order_number}/>
          <View style={styles.whatsapp}>
            <WhatsAppIcon />
          </View>
        </View>
        <View style={styles.line} />
        <Location location={item?.pickup_location}/>
        <View style={styles.line} />
        <COD  amount={item?.amount} paymentMethod={item?.payment_method}/>
        <View style={styles.btnRow}>
          <CancelButton onPress={() => navigation.navigate('Arriving')} />
          <ArrivedButton item={item}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    height: hp('100%'),
  },
  bottomContainer: {
    width: '100%',
    paddingVertical: hp('2%'),
    backgroundColor: 'white',
    borderTopLeftRadius: wp('8%'),
    borderTopRightRadius: wp('8%'),
    padding: wp('5%'),
    elevation: 10,
    position: 'absolute',
    bottom: 0,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('1%'),
  },
  orderSec: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    marginVertical: hp('2%'),
    height: 1,
    backgroundColor: '#E4E4E4',
    width: '100%',
  },
  whatsapp: {
    padding: wp('3%'),
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 5,
  },
  section: {
    position: 'absolute',
    top: hp('40%'),
    left: 0,
    right: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  multiCard: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    bottom: hp('37%'),
    zIndex: 10,
  },
});

export default Arrived;
