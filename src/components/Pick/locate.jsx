import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LocateIcon from '../../assest/location.png'
import themes from '../../theme/theme'
const Locate = () => {
  return (
   <View style ={[styles.box, {backgroundColor: themes.greenLight.locationBackground}]}>
           <Image source={LocateIcon} />
           <Text>14th Street Pizza Co, Block-7, Gulshan-e-Iqbal</Text>
       </View>
  )
}

const styles = StyleSheet.create({
  box:{
    
    flexDirection: "row",
    gap: 8,
    paddingVertical: 10, 
    paddingHorizontal: 5,
  }  
})

export default Locate