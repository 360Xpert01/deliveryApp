import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const OrderCard = ({ codId,location }) => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.row}>
          <Icon name="restaurant" size={20} color="#000" />
          <Text style={styles.orderId}>KHI 123545689713</Text>
        </View>
        <Text style={styles.cod}>COD { codId }</Text>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{location}</Text>
        </View>
      </View>

      {/* Address List */}
      <View style={styles.addressContainer}>
        <View style={styles.addressRow}>
          <Icon name="radio-button-unchecked" size={16} color="#FFA500" />
          <Text style={styles.addressText}>
            14th Street Pizza Co. Block-7, Gulshan-e-Iqbal
          </Text>
        </View>
        <View style={styles.addressRow}>
          <Icon name="location-on" size={16} color="#2E8B57" />
          <Text style={styles.addressText}>
            B 121 Block 2, Gulshan-e-Iqbal, Karachi
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    borderRadius: 14,
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    elevation:4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  orderId: {
    fontSize: 11,
    fontWeight: 700,
    marginLeft: 5,
    // width:123,
  },
  cod: {
    fontSize: 20,
    fontWeight: 700,
    color: "#00AA2F",
    // width:102,
  },
  tag: {
    backgroundColor: "#E0F7FA",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    // width:58,
  },
  tagText: {
    fontSize: 12,
    color: "#00AA2F",
  },
  addressContainer: {
    marginTop: 2,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
    backgroundColor:"#F9F9F9",
    borderRadius:6,
    padding:5,
    alignSelf: "flex-start",
  },
  addressText: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight:400,
    color: "#333",
  },
});

export default OrderCard;