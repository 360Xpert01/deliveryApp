// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

// const dish = require("../../assets/dish.png");;
// const ellipse = require("../../assets/Ellipse.png");;
// import LocationIcon from '../assest/location.png'

// const CustomerCard = ({ codId, location, orderId, navigation }) => {
//     return (
//         <TouchableOpacity
//             onPress={() => navigation.navigate("CustomerDetail", { orderId, codId, location })}
//             style={styles.card}
//         >
//             <View style={styles.cardContent}>
//                 <View style={styles.header}>
//                     <View style={styles.row}>
//                         <Image source={dish} style={{ width: 20, height: 20 }} />
//                         <Text style={styles.orderId}>{orderId}</Text>
//                     </View>
//                     <Text style={styles.cod}>COD {codId}</Text>
//                     <View style={styles.tag}>
//                         <Text style={styles.tagText}>{location}</Text>
//                     </View>
//                 </View>
//                 <View style={styles.addressContainer}>
//                     <View style={styles.addressRow}>
//                         <Image source={ellipse} style={styles.ellipse} />
//                         <Text style={styles.addressText}>
//                             14th Street Pizza Co. Block-7, Gulshan-e-Iqbal
//                         </Text>
//                     </View>
//                     <View style={styles.addressRow}>
//                         <Image source={LocationIcon} style={{ width: 18, height: 18 }}/>
//                         <Text style={styles.addressText}>
//                             B 121 Block 2, Gulshan-e-Iqbal, Karachi
//                         </Text>
//                     </View>
//                 </View>
//             </View>
//         </TouchableOpacity>
//     );
// };

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: "#FFFFFF",
//         borderRadius: 14,
//         padding: 5,
//         margin: 10,
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//         elevation: 10,
//     },
//     cardContent: {
//         backgroundColor: "#FFFFFF",
//         borderRadius: 14,
//         padding: 10,
//     },
//     header: {
//         flexDirection: "row",
//         alignItems: "center",
//         gap: wp("1%"),
//         marginBottom: hp("1%"),
//         justifyContent:'space-between'
//     },
//     row: {
//         flexDirection: "row",
//         gap: 5,
//         alignItems: "center",
//     },
//     icon: {
//         width: wp("4%"),
//         height: wp("4%"),
//     },
//     orderId: {
//         fontSize: wp("3%"),
//         fontWeight: "700",
//         marginLeft: wp("1%"),
//     },
//     cod: {
//         fontSize: wp("4%"),
//         fontWeight: "700",
//         color: "#00AA2F",
//         lineHeight: hp("3%"),
//         letterSpacing: 0.22,
//     },
//     tag: {
//         backgroundColor: "#E0F7FA",
//         paddingHorizontal: wp("3%"),
//         paddingVertical: hp("0.5%"),
//         borderRadius: wp("2%"),
//     },
//     tagText: {
//         fontSize: wp("3%"),
//         color: "#00AA2F",
//     },
//     addressContainer: {
//         marginTop: hp("0.5%"),
//     },
//     addressRow: {
//         flexDirection: "row",
//         alignItems: "center",
//         marginVertical: hp("0.5%"),
//         borderRadius: wp("2%"),
//         padding: wp("2%"),
//         alignSelf: "flex-start",
//     },
//     addressText: {
//         marginLeft: wp("1.5%"),
//         fontSize: wp("3%"),
//         fontWeight: "400",
//         color: "#333",
//     },
//     ellipse: {
//         width: wp("3%"),
//         height: wp("3%"),
//     },
// });

// export default CustomerCard;

import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import themes from '../theme/theme';

const dish = require('../../assets/dish.png');
const ellipse = require('../../assets/Ellipse.png');
const locationIcon = require('../../assets/location.png');

const CustomerCard = ({
  codId,
  area,
  orderId,
  navigation,
  riderName,
  status,
  distance,
  place
}) => {
  const statusColor =
    status === 'Delivered' ? themes.greenDark.success : themes.greenDark.error;
  const areaColor = themes.greenDark.success
  return (
    <TouchableOpacity
        onPress={() => navigation.navigate("CustomerDetail")}
      // onPress={() => navigation.navigate('CustomerDetail')}
      style={styles.card}>
      <View>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.row}>
            <Image source={dish} style={styles.icon} />
            <Text style={styles.orderId}>{orderId}</Text>
          </View>
          <Text style={styles.cod}>COD {codId}</Text>
          <View style={[styles.tag, {backgroundColor: areaColor}]}>
            <Text
              style={[styles.tagText, {color: themes.greenDark.text.primary}]}>
              {area}
            </Text>
          </View>
        </View>

        {/* Address List */}
        <View style={styles.addressContainer}>
          <View style={styles.addressRow}>
            <Image source={ellipse} style={styles.ellipse} />
            <Text style={styles.addressText}>
              14th Street Pizza Co. Block-7, Gulshan-e-Iqbal
            </Text>
          </View>
          <View style={styles.addressRow}>
            <Image source={locationIcon} style={styles.icon} />
            <Text style={styles.addressText}>
              B 121 Block 2, Gulshan-e-Iqbal, Karachi
            </Text>
          </View>
          <View style={styles.distance}>
            <View>
            <Text style={styles.riderText}>Delivered By {riderName}</Text>
            {distance && (
              <Text style={styles.addressText}>Distance {distance} km</Text>
            )}
            </View>
            <View style={[styles.tag, {backgroundColor: statusColor}]}>
              <Text
                style={[
                  styles.tagText,
                  {color: themes.greenDark.text.primary},
                ]}>
                {status}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    borderRadius: wp(3),
    padding: wp(3),
    marginVertical: hp(1),
    marginHorizontal: wp(5),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
    width: wp(90),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(1.5),
    marginBottom: hp(1),
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Ensures layout adapts on small screens
  },
  riderText: {
    marginLeft: wp(2),
    fontSize: wp(3),
    fontWeight: 'bold',
    flexWrap: 'wrap', // Prevents text overflow
    maxWidth: wp(60),
  },
  distance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap', // Ensures it adjusts on small screens
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
  },
  orderId: {
    fontSize: wp(3),
    fontWeight: '700',
    marginLeft: wp(1),
    minWidth: wp(10),
  },
  cod: {
    fontSize: wp(4),
    fontWeight: '700',
    color: '#00AA2F',
    lineHeight: hp(2.5),
    letterSpacing: 0.22,
    marginRight: wp(10), // Responsive margin
    minWidth: wp(15),
  },
  tag: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    borderRadius: wp(2.5),
    alignSelf: 'flex-start',
    minWidth: wp(12), // Ensures proper width on small screens
    alignItems: 'center',
  },
  tagText: {
    fontSize: wp(3),
    fontWeight: '600',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  addressContainer: {
    marginTop: hp(0.5),
    marginLeft: wp(1),
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(0.5),
    borderRadius: wp(1.5),
    padding: wp(2),
    flexWrap: 'wrap', // Prevents text from overflowing
    flex: 1, // Makes it responsive
  },
  addressText: {
    marginLeft: wp(2),
    fontSize: wp(3),
    fontWeight: '400',
    color: '#333',
    marginTop: hp(0.1),
    flexWrap: 'wrap', // Ensures text wraps properly
    maxWidth: wp(70),
  },
  ellipse: {
    width: wp(3.5),
    height: wp(3.5),
    resizeMode: 'contain',
  },
});


export default CustomerCard;
