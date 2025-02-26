import React from 'react';
import { StyleSheet, View ,Alert} from 'react-native';
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
import ReturnButton from '../../components/Deliver/returnButton';
import Deliver from '../../components/Deliver/deliverButton';
import MultipleOrder from '../../components/multipleOrder/multipleOrderCard';
import themes from '../../theme/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch ,useSelector} from 'react-redux';
import { updateStatusRider } from '../../Redux/slices/orders/updateOrderStatus';

const DeliverScreen = ({route}) => {
  const {item} = route.params
  const {token} = useSelector((state) => state.auth);
  console.log("sdfgsd",item)
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { count } = useOrderContext();

  console.log("count:", count);

  const handelPic = async (id)=>{
      console.log(id)
       const body ={
            order_id: id,
            order_status: "deliver"
          }
          console.log(body)
          try {
            const res = await dispatch(updateStatusRider({body , token})).unwrap()
            console.log("fsdsilgxdfd",res)
            Alert.alert("deliver")
            navigation.navigate('DeliveredScreen',{item})
            // navigation.navigate('Delivered',{item})
            // navigation.navigate("Arriving",{item});
          } catch (error) {
            console.log("sadfsdf",error)
          }
    }
  return (
    <View style={[styles.container, { color: themes.greenLight.shadow }]}>
      <Map showLine={false}/>

      {count > 1 && (
        <View style={styles.multiCard}>
          <MultipleOrder />
        </View>
      )}

      <View style={[styles.section, count > 1 ? styles.sectionWithMultiCard : styles.sectionWithoutMultiCard]}>
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
        <View style={styles.verticle} />
        <Locate locate = {item?.consignee_address}/>
        <Distance />
        <View style={styles.line} />
        <Customer name={item?.customer?.full_name} num={item?.customer?.phone_number}/>
        <View style={styles.line} />
        <COD amount={item?.amount} paymentMethod={item?.payment_method} />
        <View style={styles.btnRow}>
          <ReturnButton onPress={() => navigation.navigate('Pick')} />
          <Deliver onPress={() => {handelPic(item?.id)}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },

  bottomContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: wp('8%'),
    borderTopRightRadius: wp('8%'),
    padding: wp('5%'),
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
    marginTop: hp('2%'),
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
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },

  sectionWithMultiCard: {
    top: hp('22%'),
  },

  sectionWithoutMultiCard: {
    top: hp('30%'),
  },

  multiCard: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    top: hp('27%'),
    zIndex: 10,
  },
});

export default DeliverScreen;
