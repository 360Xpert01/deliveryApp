import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const CheckIcon = () => (
  <Svg width="136" height="133" viewBox="0 0 136 133" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M14.1742 60.7635C11.4991 60.771 8.88083 61.5358 6.62222 62.9692C4.36362 64.4027 2.55702 66.4464 1.41144 68.8638C0.265857 71.2812 -0.171895 73.9735 0.148829 76.6293C0.469554 79.2851 1.53565 81.7959 3.22377 83.871L39.2106 127.955C40.4937 129.548 42.1384 130.812 44.0082 131.642C45.8779 132.472 47.9187 132.844 49.961 132.727C54.3291 132.492 58.2726 130.156 60.7869 126.314L135.541 5.92274C135.553 5.90262 135.566 5.88275 135.579 5.86312C136.28 4.78617 136.053 2.65194 134.605 1.31119C134.207 0.943003 133.738 0.660134 133.227 0.480001C132.716 0.299869 132.174 0.226288 131.633 0.26379C131.092 0.301293 130.565 0.449086 130.083 0.698065C129.602 0.947044 129.177 1.29194 128.834 1.71151C128.807 1.74449 128.779 1.77698 128.751 1.80898L53.3606 86.9886C53.0737 87.3128 52.7253 87.5767 52.3356 87.765C51.9459 87.9534 51.5226 88.0624 51.0904 88.0858C50.6582 88.1092 50.2256 88.0464 49.8179 87.9012C49.4101 87.756 49.0352 87.5312 48.7151 87.2399L23.6945 64.471C21.0959 62.0889 17.6995 60.7662 14.1742 60.7635Z" fill="#00AA2F"
    />
  </Svg>
);

const StarIcon = ({ filled }) => (
  <Svg width={35} height={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
      fill={filled ? "#00AA2F" : "#ddd"}
    />
  </Svg>
);

const DeliveredScreen = () => {
  const [receivedBy, setReceivedBy] = useState("");
  const [rating, setRating] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.successBoxWrapper}>
        <View style={styles.successBox}>
          <CheckIcon style={styles.checkIcon} />
          <View style={styles.orderIdContainer}>
            <Text style={styles.orderId}>KHI 646543218798</Text>
          </View>
          <Text style={styles.successMessage}>Your Package Has Been Delivered</Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Received By..."
        value={receivedBy}
        onChangeText={setReceivedBy}
        placeholderTextColor="#aaa"
      />

      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <StarIcon filled={star <= rating} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate("drawer")}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  successBoxWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20,
  },
  successBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
    position: "relative",
  },
  checkIcon: {
    position: "absolute",
    top: -40,
  },
  orderIdContainer: {
    backgroundColor: "#00AA2F",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 40,
  },
  orderId: {
    color: "white",
    fontWeight: "bold",
  },
  successMessage: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  submitButton: {
    backgroundColor: "#00AA2F",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    alignItems: "center",
    width: "100%",
    elevation: 5,
    top: 150,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DeliveredScreen;
