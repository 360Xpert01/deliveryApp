import React from 'react'
import arrow from '../../assest/Vector.png'
import { Image, StyleSheet, View } from 'react-native'
import themes from '../../theme/theme'
const Arrow = () => {
  return (
    <View style={[styles.container, {shadowColor: themes.greenLight.shadow}]}>
      <Image source={arrow} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 40, 
    height: 40,
    borderRadius: 20, 
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, 
  },
  image: {
    width: 20, 
    height: 20,
    resizeMode: 'contain',
  },
})

export default Arrow