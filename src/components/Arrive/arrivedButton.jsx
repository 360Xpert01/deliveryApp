import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const ArrivedButton = ({ onPress }) => {
  return (
    <View>
        <TouchableOpacity style= {styles.btn} onPress={onPress}>
            <Text style={styles.btnText}>Arrived</Text>
        </TouchableOpacity>
       </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#00AA2F",
    width: 180, 
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 50
  },
  btnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: 600,
  }
})
export default ArrivedButton