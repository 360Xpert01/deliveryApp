import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert,Linking } from 'react-native';
import Map from '../../components/Map';
import { useTheme } from '../../theme/themeContext';
import { useNavigation } from '@react-navigation/native';
import { useOrderContext } from '../../CountContext/newOrderContext'; 
const food = require("../../assest/food.png")
import WhatsAppIcon from '../../components/WhatsAppIcon';
import themes from '../../theme/theme';
import {updateStatusRider} from "../../Redux/slices/orders/updateOrderStatus"
import { useDispatch , useSelector} from 'react-redux';
import { getOrdersId } from '../../Redux/slices/customer/orderById';

const backButton = require('../../../assets/backbutton.png');

const OrderDetailsScreen = () => {
  // const {item} = route.params;
  const item = useSelector((state) => state.getOrdersId?.getOrdersId?.data);
      // console.log("sdfgsf",data)
  console.log("fsvadsu",item)
  const {token} = useSelector((state) => state.auth);
  console.log("ergfves",token)
  const { theme } = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const { count, setCount } = useOrderContext(); 
  const [animate, setAnimate] = useState(false);

  const handleAcceptRequest = async (id) => {
    // const newCount = count + 1; 
    // setCount(newCount); 

    // setAnimate(true); 
    // navigation.navigate("Arriving"); 
    console.log("edgjhedj",id)
    const body ={
      order_id: id,
      order_status: "accept"
    }
    console.log(body)
    try {
      const res = await dispatch(updateStatusRider({body , token})).unwrap()
      console.log("fsdsd",res)
      Alert.alert("accepted")
      navigation.navigate("Arriving",{item});
    } catch (error) {
      console.log("sadfsdf",error)
    }
    // try {
    //   const res = await dispatch(getOrdersId({id , token})).unwrap()
    //   console.log("ASDGDSFG",res)
    //   navigation.navigate("Arriving");
    // } catch (error) {
      
    // }
  };
  const openWhatsApp = () => {
    console.log("sdafkjg")
    const phoneNumber =  item?.consignee_mobile;// Replace with your number//item?.consignee_mobile;"03090769754"
    const url = `https://wa.me/${phoneNumber}`;
  
    Linking.openURL(url).catch(() => {
      Alert.alert('WhatsApp is not installed');
    });
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image source={backButton} style={styles.backIcon} />
      </TouchableOpacity>

      <View style={styles.mapContainer}>
        <Map showHelmet={true} animate={animate} setAnimate={setAnimate} showLine={true} />
      </View>

      <View style={[styles.detailsContainer, { backgroundColor: theme.surface }]}>
        <View style={styles.headerRow}>
          <Image source={food} style={styles.foodIcon} />
          <Text style={[styles.orderId, { color: themes.greenLight.text }]}>
            {item?.order_number}
          </Text>
          <TouchableOpacity
            onPress={openWhatsApp}
            style={[styles.whatsappButton, { backgroundColor: theme.whatsapp }]}>
            <View>
              <WhatsAppIcon style={styles.whatsappIcon}/>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.locationRow}>
          <Text style={[styles.locationText, { color: themes.greenLight.text,backgroundColor: themes.greenLight.locationBackground  }]}>
            📍 {item?.pickup_location}
          </Text>
        </View>
        <View style={styles.locationRow}>
          <Text style={[styles.locationText, { color: themes.greenLight.text, backgroundColor: themes.greenLight.locationBackground }]}>
            📍 {item?.consignee_address}
          </Text>
        </View>
        <Text style={[styles.distanceText, { color: themes.greenLight.shadow }]}>
          Distance: 1.6 Kms
        </Text>
        <Text style={[styles.description, { color: themes.greenLight.lightgray }]}>
        Figma ipsum component variant main layer. Mask connection slice underline rotate. Vertical editor effect arrow union font. Font hand pixel library select figjam share. Line duplicate ipsum arrange slice invite thumbnail figma.
        </Text>
        <Text style={[styles.priceText, { color: themes.greenLight.text }]}>
        {item?.payment_method} <Text style={{ color: themes.greenLight.button }}>{item?.amount}</Text>
        </Text>
        <Text>COD: 1000</Text>
          <View style={styles.transiction}>
        <Text style={styles.delieverd}>
          Delievered By : <Text>Umair Khan</Text>
        </Text>
        <Text style={styles.delieverd}>
          Delievered By : <Text>Umair Khan</Text>
        </Text>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backButton: {
    position: 'absolute',
    top: 10,
    zIndex: 10,
    padding: 10,
    borderRadius: 50,
  },
  backIcon: { width: 90, height: 90 },
  mapContainer: { flex: 1 },
  detailsContainer: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
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
  orderId: { fontSize: 18, fontWeight: 'bold', paddingRight: 70, },
  whatsappButton: {
    padding: 8,
    borderRadius: 50,
  },
  whatsappIcon: { width: 24, height: 24, tintColor: 'white' },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  locationText: { marginLeft: 10, fontSize: 14, marginBottom: 20, paddingTop: 5, paddingBottom: 5, },
  distanceText: { marginTop: 10, fontWeight: 'bold', marginBottom: 10, },
  description: { fontSize: 12, marginTop: 5 },
  priceText: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  acceptButton: {
    padding: 15,
    borderRadius: 42,
    alignItems: 'center',
    marginTop: 15,
  },
  acceptButtonText: { fontSize: 16, fontWeight: 'bold', },
  delieverd:{fontWeight:'bold',fontSize:11},
  transiction:{display:'flex',flexDirection:'row',marginTop:50,fontSize:10,justifyContent:'space-between'}
});

export default OrderDetailsScreen;
