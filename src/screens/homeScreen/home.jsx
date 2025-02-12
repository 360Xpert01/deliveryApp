// import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Image, View, Text } from "react-native";
import OrderCard from "../../components/ordercard";
const SideBarImage = require("../../../assets/sidebar.png")


const LoadBoard = () => {
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navtime}>
        <Image source={SideBarImage} style={styles.img} />
        <Text style={styles.time}>00:26:23</Text>
      </View>
      <View style={styles.main}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <OrderCard codId="11,999" location="Gulshan-e-Iqbal" />
          <OrderCard codId="9,800" location="DHA" />
          <OrderCard codId="1,999" location="North Nazimabad" />
          <OrderCard codId="4,295" location="Nazimabad" />
          <OrderCard codId="1,800" location="PECHS" />
          <OrderCard codId="5,208" location="Gulshan Iqbal" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#FAFAFA",
    
  },
  scrollView: {
    paddingBottom: 100,
  },
  img: {
    height: 58,
    width: 58,
    paddingTop: 51,
    paddingBottom: 21,
  },
  main: {
    backgroundColor: "#F9F9F9",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 19,
  },
  time: {
    // width: 177,
    height: 45,
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#00AA2F",
    paddingRight:20,
  },
  navtime:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  }
});

export default LoadBoard;
