import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import Bullet from '../../assest/bullet.png'

const Location = () => {
  return (
    <View style ={styles.box}>
        <Image source={Bullet} />
        <Text>14th Street Pizza Co, Block-7, Gulshan-e-Iqbal</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box:{
    backgroundColor: "#F9F9F9",
    flexDirection: "row",
    gap: 8,
    paddingVertical: 10, 
    paddingHorizontal: 5,
  }  
})


export default Location