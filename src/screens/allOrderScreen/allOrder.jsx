import React, { useState } from "react";
import { SafeAreaView, Image, View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import themes from "../../theme/theme";
import AllOrderCard from "../../components/AllOrderCard";
import FilterOrder from "../../components/filterOrder";

const SideBarImage = require("../../../assets/sidebar.png");

const AllOrder = () => {
  const navigation = useNavigation(); 

  const [selectedFilter, setSelectedFilter] = useState("All");

  const users = [
    { codID: "PRE PAID", area: "DHA", location: "Gulistan-e-Jauhor", Id: "KHI 123545689713", status: "Delivered", riderName: "Umair Kalam" },
    { codID: "9,800", area: "DHA", location: "Gulistan-e-Jauhor", Id: "KHI 123545689713", status: "Returned", riderName: "Umair Kalam" },
    { codID: "1,999", area: "DHA", location: "Gulistan-e-Jauhor", Id: "KHI 123545689713", status: "Delivered", riderName: "Umair Kalam" },
    { codID: "4,295", area: "DHA", location: "Gulistan-e-Jauhor", Id: "KHI 123545689713", status: "Returned", riderName: "Umair Kalam" },
    { codID: "1,800", area: "DHA", location: "Gulistan-e-Jauhor", Id: "KHI 123545689713", status: "Delivered", riderName: "Umair Kalam" },
    { codID: "5,208", area: "DHA", location: "Gulistan-e-Jauhor", Id: "KHI 123545689713", status: "Returned", riderName: "Umair Kalam" },
    { codID: "5,208", area: "DHA", location: "Gulistan-e-Jauhor", Id: "KHI 123545689713", status: "Delivered", riderName: "Umair Kalam" },
    { codID: "5,208", area: "DHA", location: "Huzaifa-e-Jauhor", Id: "KHI 123545689713", status: "Returned", riderName: "Umair Kalam" },
  ];

  // Filter orders based on selected status
  const filteredOrders = selectedFilter === "All" ? users : users.filter(user => user.status === selectedFilter);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navtime}>
        <Image
          source={SideBarImage}
          style={styles.img}
          onTouchEnd={() => navigation.openDrawer()} 
        />
        <Text style={styles.time}>All Order</Text>
      </View>

      <View>
        {/* Pass setSelectedFilter to FilterOrder */}
        <FilterOrder setSelectedFilter={setSelectedFilter} />
      </View>

      <View style={styles.main}>
        <FlatList
          data={filteredOrders}
          keyExtractor={(item) => item.Id}
          renderItem={({ item }) => (
            <AllOrderCard 
              area={item.area} 
              codId={item.codID} 
              location={item.location} 
              orderId={item.Id} 
              riderName={item.riderName} 
              status={item.status} 
              navigation={navigation} 
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    flex: 1,
    backgroundColor: "#fff",
    marginBottom:50
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
    fontSize: 32,
    fontWeight: "bold",
    color: themes.primary,
    textAlign: "center",
    paddingRight: 20,
  },
  navtime: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AllOrder;
