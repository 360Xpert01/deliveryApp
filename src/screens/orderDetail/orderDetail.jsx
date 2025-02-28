import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Map from '../../components/Map';
import {useTheme} from '../../theme/themeContext';
import {useNavigation} from '@react-navigation/native';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import themes from '../../theme/theme';
import StatusOrder from '../../components/statusOrder';
import {Linking} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const food = require('../../assest/food.png');
const backButton = require('../../../assets/backbutton.png');
const bullet = require('../../assest/bullet.png');
const location = require('../../assest/location.png');

const openWhatsApp = () => {
  const phoneNumber = '+923253588091';
  const url = `whatsapp://send?phone=${phoneNumber}`;

  Linking.openURL(url).catch(() => {
    alert('WhatsApp is not installed on this device.');
  });
};

const statusData = [
  {status: 'Order Created', createdDate: '2025/02/14', createdTime: '3:27:25'},
  {status: 'Order Accepted', createdDate: '2025/02/14', createdTime: '3:30:00'},
  {status: 'Rider Arrived', createdDate: '2025/02/14', createdTime: '3:35:14'},
  {status: 'Rider Picked', createdDate: '2025/02/14', createdTime: '3:40:00'},
  {
    status: 'Order Delivered',
    createdDate: '2025/02/14',
    createdTime: '3:50:30',
  },
  // { status: 'Order Completed', createdDate: '2025/02/14', createdTime: '4:00:00' },
];

const codScreen = () => {
  const {theme} = useTheme();
  const navigation = useNavigation();
  const [animate, setAnimate] = useState(false);

  const isOrderCompleted =
    statusData[statusData.length - 1].status === 'Order Completed';

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image source={backButton} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Hide Map when Order is Completed */}
      {!isOrderCompleted && (
        <View style={styles.mapContainer}>
          <Map showHelmet={false} animate={animate} setAnimate={setAnimate} />
        </View>
      )}

      {/* Order Details */}
      <View
        style={[
          isOrderCompleted ? styles.detailsContainer2 : styles.detailsContainer,
          {backgroundColor: theme.surface},
        ]}>
        <View style={styles.headerRow}>
          <Image source={food} style={styles.foodIcon} />
          <Text style={[styles.orderId, {color: themes.greenLight.shadow}]}>
            KHI 123545689713
          </Text>
          <TouchableOpacity
            onPress={openWhatsApp}
            style={[styles.whatsappButton, {backgroundColor: theme.whatsapp}]}>
            <WhatsAppIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        {/* Order Locations */}
        <View
          style={[
            styles.locationRow,
            {backgroundColor: themes.greenLight.locationBackground},
          ]}>
          <Image source={bullet} style={styles.icon} />
          <Text
            style={[styles.locationText, {color: themes.greenLight.shadow}]}>
            14th Street Pizza Co, Block-7, Gulshan-e-Iqbal
          </Text>
        </View>
        <View style={styles.verticle} />
        <View
          style={[
            styles.locationRow,
            {backgroundColor: themes.greenLight.locationBackground},
          ]}>
          <Image source={location} style={styles.icon} />
          <Text
            style={[styles.locationText, {color: themes.greenLight.shadow}]}>
            B 121 Block 66, Gulshan-e-Iqbal, Karachi.
          </Text>
        </View>

        <Text style={[styles.distanceText, {color: themes.greenLight.shadow}]}>
          Distance: 1.6 Kms
        </Text>
        <View style={styles.line} />
        {/* COD Price */}
        <Text style={[styles.priceText, {color: themes.greenLight.shadow}]}>
          COD: <Text style={{color: theme.primary}}>11,999</Text>
        </Text>

        <View style={styles.dealers}>
          <Text style={styles.delivered}>
            Delivered By: <Text style={styles.delivered2}>Umair Khan</Text>
          </Text>
          <Text style={styles.delivered}>
            Received By: <Text style={styles.delivered2}>Bilal Ahmed</Text>
          </Text>
        </View>
        <View style={styles.line} />
        {/* Order Status List */}
        <ScrollView
          style={{maxHeight: 200}}
          contentContainerStyle={{paddingBottom: 20}}>
          {statusData.map((item, index) => (
            <StatusOrder
              key={index}
              status={item.status}
              createdDate={item.createdDate}
              createdTime={item.createdTime}
            />
          ))}
        </ScrollView>

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
              navigation.navigate('ReceivedScreen');
            }
          }}
          disabled={isOrderCompleted}>
          <Text style={[styles.acceptButtonText]}>Received COD</Text>
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
    left: 10,
    zIndex: 10,
    borderRadius: 50,
  },
  backIcon: {width: 70, height: 70},
  mapContainer: {flex: 1},
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
    marginTop: 60,
    // height:'100%',
    marginBottom: 10,
    bottom: 0,
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  foodIcon: {width: 40, height: 40},
  orderId: {fontSize: 18, fontWeight: 'bold', paddingRight: 40},
  whatsappButton: {
    padding: 8,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    paddingHorizontal: 10,
  },
  locationText: {marginLeft: 10, fontSize: 12, paddingVertical: 5},
  icon: {width: 15, height: 15, marginRight: 5},
  distanceText: {marginTop: 10},
  priceText: {fontSize: 20, fontWeight: 'bold', marginTop: 10},
  priceStatus: {
    fontSize: 16,
    color: themes.greenLight.primary,
    fontWeight: 'bold',
    marginTop: 6,
  },
  dealers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  delivered: {fontSize: 12, fontWeight: 'bold', color: 'black'},
  delivered2: {fontSize: 12, fontWeight: '400'},
  acceptButton: {
    padding: 15,
    borderRadius: 42,
    alignItems: 'center'
  },
  acceptButtonText: {fontSize: 16, fontWeight: 'bold', color: 'white'},
  verticle: {
    height: hp('2%'),
    borderLeftWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    marginLeft: wp('5%'),
  },
  line: {
    marginVertical: hp('1%'),
    height: 1,
    backgroundColor: '#E4E4E4',
    width: '100%',
  },
});

export default codScreen;
