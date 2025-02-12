import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const PickButton = () => {
  return (
   <View>
    <TouchableOpacity style= {styles.btn}>
        <Text style={styles.btnText}>+ Pick Delivery</Text>
    </TouchableOpacity>
   </View>
  )
}


const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#00AA2F",
    width: 150, 
    paddingHorizontal: 15,
    paddingVertical:10,
    borderRadius: 50
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: 600,
  }
})
export default PickButton