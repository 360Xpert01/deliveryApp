import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Map from '../../components/Map';
import { useTheme } from '../../theme/themeContext';
import { useNavigation } from '@react-navigation/native';
import { useOrderContext } from '../../CountContext/newOrderContext'; 
const food = require("../../assest/food.png")
import WhatsAppIcon from '../../components/WhatsAppIcon';

const backButton = require('../../../assets/backbutton.png');

const LoadDetailsScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const { count, setCount } = useOrderContext(); 
  const [animate, setAnimate] = useState(false);

  const handleAcceptRequest = () => {
    const newCount = count + 1; 
    setCount(newCount); 

    setAnimate(true); 
    navigation.navigate("Arriving"); 
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
        <Map showHelmet={false} animate={animate} setAnimate={setAnimate} showLine={true} />
      </View>

      <View style={[styles.detailsContainer, { backgroundColor: theme.surface }]}>
        <View style={styles.headerRow}>
          <Image source={food} style={styles.foodIcon} />
          <Text style={[styles.orderId, { color: theme.text.primary }]}>
            ORD-2023-4578
          </Text>
          <TouchableOpacity
            style={[styles.whatsappButton, { backgroundColor: theme.whatsapp }]}>
            <View style={styles.whatsappIcon}>
              <WhatsAppIcon />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.locationRow}>
          <Text style={[styles.locationText, { color: theme.text.secondary }]}>
            📍 14th Street Pizza Co, Block-7, Gulshan-e-Iqbal
          </Text>
        </View>
        <View style={styles.locationRow}>
          <Text style={[styles.locationText, { color: theme.text.secondary }]}>
            📍 B 121 Block 66, Gulshan-e-Iqbal, Karachi.
          </Text>
        </View>
        <Text style={[styles.distanceText, { color: theme.text.primary }]}>
          Distance: 1.6 Kms
        </Text>
        <Text style={[styles.description, { color: theme.text.light }]}>
          Figma ipsum component variant main layer...
        </Text>
        <Text style={[styles.priceText, { color: theme.text.primary }]}>
          COD: <Text style={{ color: theme.primary }}>11,999</Text>
        </Text>
        
        {/* Accept Request Button */}
        <TouchableOpacity
          style={[styles.acceptButton, { backgroundColor: theme.primary }]}
          onPress={handleAcceptRequest} // Call function on press
        >
          <Text style={[styles.acceptButtonText, { color: theme.text.onPrimary }]}>
            Accept Request
          </Text>
        </TouchableOpacity>

        {/* Show Current Count */}
        <Text style={{ textAlign: 'center', marginTop: 10 }}>
          Accepted Orders: {count}
        </Text>
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
  locationText: { marginLeft: 10, fontSize: 14, marginBottom: 20, backgroundColor: "#F9F9F9", paddingTop: 5, paddingBottom: 5, },
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
});

export default LoadDetailsScreen;
