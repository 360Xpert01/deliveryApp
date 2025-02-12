import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Map from '../../components/Map';
import {useTheme} from '../theme/themeContext';
import themes from '../theme/theme';
import WAIcon from '../../assets/WA.svg';

const Delivered = () => {
  const {theme} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View
        style={[
          styles.detailsContainer,
          {backgroundColor: theme.surface, shadowColor: theme.shadow},
        ]}>
        <View style={styles.headerRow}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
            }}
            style={styles.foodIcon}
          />
          <Text style={[styles.orderId, {color: theme.text.primary}]}>
            ORD-2023-4578
          </Text>
          <TouchableOpacity
            style={[styles.whatsappButton, {backgroundColor: theme.whatsapp}]}>
            <WAIcon width={24} height={24} fill={theme.text.onPrimary} />
          </TouchableOpacity>
        </View>
        <View style={styles.locationRow}>
          <Text style={[styles.locationText, {color: theme.text.secondary}]}>
            📍 14th Street Pizza Co, Block-7, Gulshan-e-Iqbal
          </Text>
        </View>
        <View style={styles.locationRow}>
          <Text style={[styles.locationText, {color: theme.text.secondary}]}>
            📍 B 121 Block 66, Gulshan-e-Iqbal, Karachi.
          </Text>
        </View>
        <Text style={[styles.distanceText, {color: theme.text.primary}]}>
          Distance: 1.6 Kms
        </Text>
        <Text style={[styles.customerName, {color: theme.text.primary}]}>
          Customer: John Doe
        </Text>
        <Text style={[styles.priceText, {color: theme.text.primary}]}>
          COD: <Text style={{color: theme.primary}}>11,999</Text>
        </Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.returnedButton, {backgroundColor: 'red'}]}>
            <Text style={[styles.buttonText, {color: theme.text.onPrimary}]}>
              Returned
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.deliveredButton, {backgroundColor: 'green'}]}>
            <Text style={[styles.buttonText, {color: theme.text.onPrimary}]}>
              Delivered
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  mapContainer: {flex: 1},
  detailsContainer: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  foodIcon: {width: 40, height: 40},
  orderId: {fontSize: 18, fontWeight: 'bold'},
  whatsappButton: {
    padding: 8,
    borderRadius: 50,
  },
  whatsappIcon: {width: 24, height: 24},
  locationRow: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
  locationText: {marginLeft: 10, fontSize: 14},
  distanceText: {marginTop: 10, fontWeight: 'bold'},
  customerName: {marginTop: 10, fontSize: 16, fontWeight: 'bold'},
  priceText: {fontSize: 16, fontWeight: 'bold', marginTop: 10},
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  returnedButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 5,
  },
  deliveredButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonText: {fontSize: 16, fontWeight: 'bold'},
});

export default Delivered;
