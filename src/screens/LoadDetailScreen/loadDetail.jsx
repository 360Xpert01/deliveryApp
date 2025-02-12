import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import Map from "../../components/Map";
import { useTheme } from "../theme/themeContext";
import themes from "../theme/theme";

const { width } = Dimensions.get("window");

const LoadDetailsScreen = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}> 
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={[styles.detailsContainer, { backgroundColor: theme.surface }]}> 
        <View style={styles.headerRow}>
          <View style={styles.orderInfo}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png" }}
              style={styles.foodIcon}
            />
            <Text style={[styles.orderId, { color: theme.text.primary }]}>ORD-2023-4578</Text>
          </View>
          <TouchableOpacity style={[styles.whatsappButton, { backgroundColor: theme.whatsapp }]}> 
            <Image
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" }}
              style={styles.whatsappIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.locationContainer}>
          <View style={[styles.locationRow, styles.locationBox]}> 
            <Text style={[styles.locationText, { color: theme.text.secondary }]}>📍 14th Street Pizza Co, Block-7, Gulshan-e-Iqbal</Text>
          </View>
          <View style={[styles.locationRow, styles.locationBox]}> 
            <Text style={[styles.locationText, { color: theme.text.secondary }]}>📍 B 121 Block 2, Gulshan-e-Iqbal, Karachi.</Text>
          </View>
        </View>

        <Text style={[styles.distanceText, { color: theme.text.primary }]}>Distance: 1.6 Kms</Text>
        <Text style={[styles.description, { color: theme.text.light }]}>Figma ipsum component variant main layer. Mask connection slice underline rotate.</Text>

        <Text style={[styles.priceText, { color: theme.text.primary }]}>COD: <Text style={{ color: theme.primary }}>11,999</Text></Text>
        
        <TouchableOpacity style={[styles.acceptButton, { backgroundColor: theme.primary }]}> 
          <Text style={[styles.acceptButtonText, { color: theme.text.onPrimary }]}>Accept Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  mapContainer: { flex: 1 },
  detailsContainer: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  foodIcon: { width: 40, height: 40, marginRight: 10 },
  orderId: { fontSize: 18, fontWeight: "bold" },
  whatsappButton: {
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  whatsappIcon: { width: 24, height: 24, tintColor: "white" },
  locationContainer: { marginTop: 10 },
  locationRow: { flexDirection: "row", alignItems: "center" },
  locationBox: {
    backgroundColor: "rgba(0,0,0,0.05)", 
    borderRadius: 8,
    padding: 10,
    marginBottom: 5,
  },
  locationText: { fontSize: 14 },
  distanceText: { marginTop: 10, fontWeight: "bold" },
  description: { fontSize: 12, marginTop: 5 },
  priceText: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  acceptButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
    width: width * 0.9,
    alignSelf: "center",
  },
  acceptButtonText: { fontSize: 16, fontWeight: "bold" },
});

export default LoadDetailsScreen;
