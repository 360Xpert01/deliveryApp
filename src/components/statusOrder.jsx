import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import themes from '../theme/theme'

const green = require('../assest/greenbullet.png')

const StatusOrder = ({status,createdDate,createdTime}) => {
  return (
    <View style={styles.mainContainer}>
        <View>
      <Text style={styles.orderStatus}><Image source={green}/>       {status}</Text>
      <Text>            {createdDate}</Text>
        </View>
        <View>
            <Text>{createdTime}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    orderStatus:{
        fontWeight:'bold',
        marginBottom:4,
        color:themes.greenDark.shadow
    }
})

export default StatusOrder