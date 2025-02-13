import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Distance = () => {
  return (
   <View>
    <Text style= {styles.text}>
    Distance: 1.6 Kms
    </Text>
   </View>
  )
}

const styles= StyleSheet.create({
    text: {
        marginVertical: 15,    
    }
})

export default Distance