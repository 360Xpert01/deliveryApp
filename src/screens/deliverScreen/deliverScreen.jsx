import React from 'react';
import { StyleSheet, View } from 'react-native';
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
import ReturnButton from '../../components/Deliver/returnButton';
import Deliver from '../../components/Deliver/deliverButton';
import MultipleOrder from '../../components/multipleOrder/multipleOrderCard';
import { useOrderContext } from '../../CountContext/newOrderContext';

const DeliverScreen = () => {
  const navigation = useNavigation();
  const { count } = useOrderContext(); // Get count from context
console.log("count" + count);
  return (
    <View style={styles.container}>
      <Map />

      {count > 1 && (
        <View style={styles.multiCard}>
          <MultipleOrder />
        </View>
      )}

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
          <ReturnButton onPress={() => navigation.navigate('Pick')} />
          <Deliver onPress={() => navigation.navigate('DeliveredScreen')} />
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  verticle: {
    height: 30,
    borderLeftWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    marginLeft: 15,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: "space-between",
    gap: 20,
    marginTop: 10,
  },
  line: {
    marginVertical: 5,
    height: 1,
    backgroundColor: '#E4E4E4',
    width: '100%',
  },
  orderSec: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  whatsapp: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 5,
  },
  section: {
    position: "absolute",
    top: "25%",  
    left: 0,
    right: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",  
    paddingHorizontal: 20,
  },  
  multiCard: {
    position: "absolute",
    alignItems: "center",
    width: "100%",
    top: "30%",
    zIndex: 10,
  }
});

export default DeliverScreen;
