import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import themes from '../../theme/theme'

const COD = ({paymentMethod,amount}) => {
  return (
    <View style={styles.cash}>
      <Text style={[styles.label, {color: themes.greenLight.text}]}>{paymentMethod}:</Text>
      <Text style={[styles.amount, {color: themes.greenLight.button}]}>{amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cash: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  amount: {
    fontSize: 20,
    // color: '#00AA2F',
    fontWeight: 'bold',
  },
})

export default COD