import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Delivered = () => {

    const delievered = require('../../../assets/tick.png')

  return (
    <View>
      <View style={styles.main}>
      <Image source={delievered} style={styles.img}/>
      </View>
    </View>
  )
}

export default Delivered

const styles = StyleSheet.create({
    img:{
        height:100,
        width:100
    }
})