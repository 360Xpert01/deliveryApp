import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import Bullet from '../../assest/bullet.png'
import themes from '../../theme/theme'

const Location = () => {
  return (
    <View style={[styles.box, {backgroundColor: themes.greenLight.locationBackground}]}>
      <Image source={Bullet}/>
      <Text style={{ color: themes.greenLight.text }}>
      14th Street Pizza Co, Block-7, Gulshan-e-Iqbal
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    
    flexDirection: "row",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 5,
  }
})


export default Location