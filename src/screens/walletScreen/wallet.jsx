import { View, Text,Image,StyleSheet } from 'react-native'
const SideBarImage = require("../../../assets/sidebar.png")
import React from 'react'

const Wallet = () => {
  return (
    <View atyle={styles.header}>
      <Image source={SideBarImage} style={styles.img} />
      <Text>Wallet</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    marginTop:20,
    marginLeft:10,
    height: 62,
    width: 62,
    paddingTop: 31,
    paddingBottom: 21,
    paddingLeft: 32,
  },
  header:{
    flexDirection:"row",
  }
});

export default Wallet