import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Image, View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import OrderCard from "../../components/ordercard";
import themes from "../../theme/theme";
const SideBarImage = require("../../../assets/sidebar.png");

const BookingHistory = () => {
  const navigation = useNavigation(); 

  const users = [
    {
      codID: "11, 999",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
    },
    {
      codID: "9,800",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
    },
    {
      codID: "1,999",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
    },
    {
      codID: "4,295",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
    },
    {
      codID: "1,800",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
    },
    {
      codID: "5,208",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
    },
    {
      codID: "5,208",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
    },
    {
      codID: "5,208",
      location: "Huzaifa-e-Jauhor",
      Id: "KHI 123545689713",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navtime}>
        {/* Add an onPress event to the Image to open the drawer */}
        <Image
          source={SideBarImage}
          style={styles.img}
          onTouchEnd={() => navigation.openDrawer()} // This will open the drawer when clicked
        />
        <Text style={styles.time}>Order History</Text>
      </View>
      <View style={styles.main}>
        <View>
          <FlatList
            data={users}
            renderItem={({ item }) => (
              <OrderCard codId={item.codID} location={item.location} orderId={item.Id} />
            )}
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
    paddingBottom: 100,
  },
  time: {
    height: 45,
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    justifyContent:'center',
    textAlign: "center",
    // textAlignVertical: "center",
    color: themes.primary,
    // paddingRight: 20,
  },
  navtime: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
});

export default BookingHistory;