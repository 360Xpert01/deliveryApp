import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Image, View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import OrderCard from "../../components/ordercard";
import themes from "../../theme/theme";
import HistoryCard from "../../components/historyCard";
import AllOrderCard from "../../components/AllOrderCard";
import FilterOrder from "../../components/filterOrder";
const SideBarImage = require("../../../assets/sidebar.png");


const AllOrder = () => {
  const navigation = useNavigation(); 

  const users = [
    {
      codID: "PRE PAID",
      area:"DHA",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Delivered',
      riderName:"Umair Kalam" 
    },
    {
      codID: "9,800",
      area:"DHA",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Returned',
      riderName:"Umair Kalam" 
    },
    {
      codID: "1,999",
      area:"DHA",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Delivered',
      riderName:"Umair Kalam" 
    },
    {
      codID: "4,295",
      area:"DHA",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Returned',
      riderName:"Umair Kalam" 
    },
    {
      codID: "1,800",
      area:"DHA",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Delivered',
      riderName:"Umair Kalam" 
    },
    {
      codID: "5,208",
      area:"DHA",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Returned',
      riderName:"Umair Kalam" 
    },
    {
      codID: "5,208",
      area:"DHA",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Delivered',
      riderName:"Umair Kalam" 
    },
    {
      codID: "5,208",
      area:"DHA",
      location: "Huzaifa-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Returned',
      riderName:"Umair Kalam" 
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
        <Text style={styles.time}>All Order</Text>
      </View>
        <View>
          <FilterOrder/>
        </View>
      <View style={styles.main}>
        <View>
          <FlatList
            data={users}
            renderItem={({ item }) => (
              <AllOrderCard area={item.area} codId={item.codID} location={item.location} orderId={item.Id} riderName={item.riderName} status={item.status} navigation={navigation} />
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
    paddingTop: 2,
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
    paddingRight: 20,
  },
  navtime: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
});

export default AllOrder;