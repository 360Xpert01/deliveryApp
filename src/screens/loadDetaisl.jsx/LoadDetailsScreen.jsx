import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Map from "../../components/Map";

const LoadDetailsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Map View */}
      <View style={styles.mapContainer}>
        <Map/>
      </View>

      {/* Bottom Order Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.headerRow}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png" }}
            style={styles.foodIcon}
          />
          <Text style={styles.orderId}>ORD-2023-4578</Text>
          <TouchableOpacity style={styles.whatsappButton}>
            <Image 
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" }}
              style={styles.whatsappIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Pickup & Dropoff Locations */}
        <View style={styles.locationRow}>
          <Text style={styles.locationText}>📍 14th Street Pizza Co, Block-7, Gulshan-e-Iqbal</Text>
        </View>

        <View style={styles.locationRow}>
          <Text style={styles.locationText}>📍 B 121 Block 66, Gulshan-e-Iqbal, Karachi.</Text>
        </View>

        {/* Distance & Description */}
        <Text style={styles.distanceText}>Distance: 1.6 Kms</Text>
        <Text style={styles.description}>
          Figma ipsum component variant mask connection slice underline rotate.
        </Text>

        {/* Price & Accept Button */}
        <Text style={styles.priceText}>COD: <Text style={styles.priceValue}>11,999</Text></Text>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.acceptButtonText}>Accept Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8" },
  mapContainer: { flex: 1 }, // Takes full screen before details appear
  detailsContainer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    elevation: 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  foodIcon: { width: 40, height: 40 },
  orderId: { fontSize: 18, fontWeight: "bold" },
  whatsappButton: {
    backgroundColor: "#25D366",
    padding: 8,
    borderRadius: 50,
  },
  whatsappIcon: { width: 24, height: 24, tintColor: "white" },
  locationRow: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  locationText: { marginLeft: 10, fontSize: 14, color: "#444" },
  distanceText: { marginTop: 10, fontWeight: "bold" },
  description: { fontSize: 12, color: "#888", marginTop: 5 },
  priceText: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  priceValue: { color: "green" },
  acceptButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  acceptButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default LoadDetailsScreen;

