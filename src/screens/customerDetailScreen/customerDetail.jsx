import React, {useState , useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,ScrollView} from 'react-native';
import Map from '../../components/Map';
import {useTheme} from '../../theme/themeContext';
import {useNavigation} from '@react-navigation/native';
const food = require("../../assest/food.png")
import WhatsAppIcon from '../../components/WhatsAppIcon';
import themes from '../../theme/theme';
import StatusOrder from '../../components/statusOrder';

const backButton = require('../../../assets/backbutton.png');
const bullet = require('../../assest/bullet.png')
const location = require('../../assest/location.png')



const statusData = [
  { status: 'Order Created', createdDate: '2025/02/14', createdTime: '3:27:25' },
  { status: 'Order Accepted', createdDate: '2025/02/14', createdTime: '3:30:00' },
  { status: 'Rider Arrived', createdDate: '2025/02/14', createdTime: '3:35:14' },
  { status: 'Rider Picked', createdDate: '2025/02/14', createdTime: '3:40:00' },
  { status: 'Order Delivered', createdDate: '2025/02/14', createdTime: '3:50:30' },
  { status: 'Order Completed', createdDate: '2025/02/14', createdTime: '4:00:00' },
];

const CustomerDetailsScreen = () => {
  const {theme} = useTheme();
  const navigation = useNavigation();
  const [animate, setAnimate] = useState(false);

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image source={backButton} style={styles.backIcon} />
      </TouchableOpacity>

      <View style={styles.mapContainer}>
        <Map showHelmet={false} animate={animate} setAnimate={setAnimate} />
      </View>
      <View style={[styles.detailsContainer, {backgroundColor: theme.surface}]}>
        <View style={styles.headerRow}>
          <Image
            source={food}
            style={styles.foodIcon}
          />
          <Text style={[styles.orderId, {color: theme.text.primary}]}>
            ORD-2023-4578
          </Text>
          <TouchableOpacity
            style={[styles.whatsappButton, {backgroundColor: theme.whatsapp}]}>
            {/* <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
              }}
              
            /> */}
            <View style={styles.whatsappIcon}>
               <WhatsAppIcon />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.locationRow}>
          <Text style={[styles.locationText, {color: theme.text.secondary}]}>
            <Image source={bullet}/> 14th Street Pizza Co, Block-7, Gulshan-e-Iqbal
          </Text>
        </View>
        <View style={styles.locationRow}>
          <Text style={[styles.locationText, {color: theme.text.secondary}]}>
          <Image source={location}/> B 121 Block 66, Gulshan-e-Iqbal, Karachi.
          </Text>
        </View>
        <Text style={[styles, {color: theme.text.primary}]}>
          Distance: 1.6 Kms
        </Text>
        <Text style={[styles.priceStatus]}>
          PRE PAID
        </Text>
        <View style={styles.dealers}>
            <Text style={styles.delivered}>Delievered By : <Text style={styles.delivered2}>Umair Khan</Text></Text>
            <Text style={styles.delivered}>Received By : <Text style={styles.delivered2}>Bilal Ahmed</Text></Text>
        </View>
        <ScrollView style={[{flex:1, height:200}]}>
        {/* <StatusOrder status={'Order Created'} createdDate={'2025/02/14'} createdTime={'3:27:25'}/>
        <StatusOrder status={'Order Accepted'} createdDate={'2025/02/14'} createdTime={'3:27:25'}/>
        <StatusOrder status={'Order Arrived'} createdDate={'2025/02/14'} createdTime={'3:27:25'}/>
        <StatusOrder status={'Rider Picked'} createdDate={'2025/02/14'} createdTime={'3:27:25'}/>
        <StatusOrder status={'Order Delievered'} createdDate={'2025/02/14'} createdTime={'3:27:25'}/>
        <StatusOrder status={'Order Completed'} createdDate={'2025/02/14'} createdTime={'3:27:25'}/> */}
        {statusData.map((item, index) => (
        <StatusOrder 
          key={index} 
          status={item.status} 
          createdDate={item.createdDate} 
          createdTime={item.createdTime} 
        />
      ))}
        </ScrollView>
        {/* <Text style={[styles.description, {color: theme.text.light}]}>
        </Text> */}
        <Text style={[styles.priceText, {color: theme.text.primary}]}>
          COD: <Text style={{color: theme.primary}}>11,999</Text>
        </Text>
        <TouchableOpacity
          style={[styles.acceptButton, { backgroundColor: theme.primary }]}
          onPress={() => {
            setAnimate(true); // Start animation when button is pressed
            navigation.navigate("Arriving");
          }}
        >
          <Text style={[styles.acceptButtonText, { color: theme.text.onPrimary }]}>
            Received COD
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  backButton: {
    position: 'absolute',
    top: 10,
    zIndex: 10,
    padding: 10,
    borderRadius: 50,
  },
  dealers:{display:'flex',flexDirection:'row',justifyContent:'space-around',fontWeight:'bold',marginTop:10},
  delivered:{fontSize:12,fontWeight:'bold'},
  delivered2:{fontSize:12,fontWeight:'400'},
  backIcon: {width: 90, height: 90},
  mapContainer: {flex: 1},
  detailsContainer: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    // elevation: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:5,
  },
  foodIcon: {width: 40, height: 40},
  orderId: {fontSize: 18, fontWeight: 'bold',paddingRight:70,},
  whatsappButton: {
    padding: 8,
    borderRadius: 50,
  },
  whatsappIcon: {width: 24, height: 24, tintColor: 'white'},
  locationRow: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
  locationText: {marginLeft: 10, fontSize: 12,marginBottom:10,paddingTop:5,paddingBottom:5,},
  distanceText: {marginTop: 10, fontWeight: 'bold',marginBottom:10},
  description: {fontSize: 12, marginTop: 5},
  priceText: {fontSize: 20, fontWeight: 'bold', marginTop: 10},
  priceStatus:{fontSize:20,color:themes.greenLight.primary,fontWeight:'bold',marginTop:6},
  acceptButton: {
    padding: 15,
    borderRadius: 42,
    alignItems: 'center',
    marginTop: 15,
  },
  acceptButtonText: {fontSize: 16, fontWeight: 'bold',},
});

export default CustomerDetailsScreen;
