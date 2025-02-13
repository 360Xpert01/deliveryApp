import React from 'react'
import arrow from '../../assest/Vector.png'
import { Image, StyleSheet, View } from 'react-native'
const Arrow = () => {
  return (
    <View style={styles.container}>
      <Image source={arrow} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 40, // Circle size
    height: 40,
    borderRadius: 20, // Makes it circular
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Optional: Adds a slight shadow
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
  },
  image: {
    width: 20, // Adjust based on your icon size
    height: 20,
    resizeMode: 'contain',
  },
})

export default Arrow