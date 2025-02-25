import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LocateIcon from '../../assest/location.png'
import themes from '../../theme/theme'
const Locate = ({locate}) => {
  return (
   <View style ={[styles.box, {backgroundColor: themes.greenLight.locationBackground}]}>
           <Image source={LocateIcon} />
           <Text style={{ color: themes.greenLight.text }}>
            {locate}</Text>
       </View>
  )
}

const styles = StyleSheet.create({
  box:{
    color:'black',
    flexDirection: "row",
    gap: 8,
    paddingVertical: 10, 
    paddingHorizontal: 5,
  }  
})

export default Locate