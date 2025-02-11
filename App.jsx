// import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Image, View, Text,FlatList } from "react-native";
import OrderCard from "./src/components/ordercard"; 
const SideBarImage = require("./assets/sidebar.png");



const App = () => {
  const users = [
    {
      codID: "11, 999",
      location: "Gulistan-e-Jauhor",
      Id:"KHI 123545689713",
    },
    {
      codID: "9,800",
      location: "Gulistan-e-Jauhor",
      Id:"KHI 123545689713",
    },
    {
      codID: "1,999",
      location: "Gulistan-e-Jauhor",
      Id:"KHI 123545689713",
    },
    {
      codID: "4,295",
      location: "Gulistan-e-Jauhor",
      Id:"KHI 123545689713",
    },
    {
      codID: "1,800",
      location: "Gulistan-e-Jauhor",
      Id:"KHI 123545689713",
    },
    {
      codID: "5,208",
      location: "Gulistan-e-Jauhor",
      Id:"KHI 123545689713",
    },
    {
      codID: "5,208",
      location: "Gulistan-e-Jauhor",
      Id:"KHI 123545689713",
    },
    {
      codID: "5,208",
      location: "Huzaifa-e-Jauhor",
      Id:"KHI 123545689713",
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navtime}>
        <Image source={SideBarImage} style={styles.img} />
        <Text style={styles.time}>00:26:40</Text>
      </View>
      <View style={styles.main}>
        <View>
          <FlatList
          data  = {users}
          renderItem={({item})=><OrderCard codId={item.codID} location={item.location} orderId={item.Id}/>}
          />
        </View>
      </View> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    flex: 1,
    backgroundColor: "#fff",
    
  },
  
  img: {
    height: 58,
    width: 58,
    paddingTop: 51,
    paddingBottom: 21,
    paddingLeft: 15,
  },
  main: {
    backgroundColor: "#F9F9F9",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 21,
    paddingBottom:100,
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
    paddingRight: 20,
  },
  navtime: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  }
});

export default App;
