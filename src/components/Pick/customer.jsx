import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Profile from '../../assest/profile.png'

const Customer = () => {
  return (
   <View style={styles.box}>
<Image source={Profile}/>
<Text style={styles.text}>Customer Name</Text>
   </View>
  )
}


const styles = StyleSheet.create({
  box:{
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10, 
    paddingHorizontal: 5,
    alignItems: "center",
  },
  text:{
    fontSize: 15,
    fontWeight: 700,
  }  
})
export default Customer