import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const COD = () => {
  return (
<View style={styles.cash}>
      <Text style={styles.label}>COD:</Text>
      <Text style={styles.amount}>11,999</Text>
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
        color: '#00AA2F', 
        fontWeight: 'bold',
      },
})

export default COD