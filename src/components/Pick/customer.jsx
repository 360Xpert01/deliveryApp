import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Profile from "../../assest/profile.png";
import CallIcon from "../callIcon"; // Ensure correct import
import call from "react-native-phone-call"; // Import phone call functionality

const Customer = ({ phoneNumber = "" }) => {
  const makeCall = () => {
    const args = {
      number: phoneNumber,
      prompt: true, // Show confirmation before dialing
    };
    call(args).catch(console.error);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={Profile} style={styles.profileImage} />
        <Text style={styles.text}>Customer Name</Text>
      </View>
      <TouchableOpacity style={styles.callButton} onPress={makeCall}>
        <CallIcon width={22} height={22} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, 
  },
  text: {
    fontSize: 15,
    fontWeight: "700",
  },
  callButton: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Customer;
