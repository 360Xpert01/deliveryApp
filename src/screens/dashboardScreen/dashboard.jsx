import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import ActiveOrder from '../../components/CustomerDashboard/activeOrder'
import TotalOrder from '../../components/CustomerDashboard/totalOrder'
import ReturnOrder from '../../components/CustomerDashboard/returnOrder'
import dayjs from "dayjs";
import AddNewOrderButton from "../../components/CustomerDashboard/addNewOrderButton";
const SideBarImage = require("../../../assets/sidebar.png");

const Dashboard = () => {
  const [time, setTime] = useState(dayjs());
  useEffect(() => {
      const interval = setInterval(() => {
        setTime(dayjs());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  return (
    <SafeAreaView>
    <View style={styles.navtime}>
    <Image
      source={SideBarImage}
      style={styles.img}
      onTouchEnd={() => navigation.openDrawer()} 
    />
   <Text style={styles.time}>{time.format("hh:mm:ss")}
    </Text> 
  </View>
    <View>
      <View style={styles.col}>
        <TotalOrder />
        <ActiveOrder />
      </View>
      <View>
        <ReturnOrder />
       
      </View>
      <AddNewOrderButton/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  col: {
    flexDirection: "row",
    paddingVertical: 10,
    gap: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navtime: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  time: {
    height: 45,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#00AA2F",
    paddingRight: 20,
  },
})
export default Dashboard
