import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import themes from '../../theme/theme'


const Distance = () => {
  return (
   <View>
    <Text style= {[styles.text, {color: themes.greenLight.shadow}]}>
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