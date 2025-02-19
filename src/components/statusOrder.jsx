import { View, Text, StyleSheet, Image ,ScrollView} from 'react-native'
import React from 'react'

const green = require('../assest/greenbullet.png')

const StatusOrder = ({ status, createdDate, createdTime }) => {
  return (
    <View style={styles.container}>
      {/* Left Section - Timeline */}
      {/* <View style={styles.timelineContainer}>
        <Image source={green} style={styles.bulletIcon} />
        <View style={styles.dashedLine} />
      </View> */}
      <View style={styles.timelineContainer}>
        <View style={styles.radioButton}>
          <View style={styles.innerCircle} />
        </View>
        <View style={styles.dashedLine} />
      </View>

      {/* Right Section - Order Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.orderStatus}>{status}</Text>
        <Text style={styles.date}>{createdDate}</Text>
      </View>

      {/* Time Section */}
      <Text style={styles.time}>{createdTime}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height:50,
    // paddingVertical: 20,
  },
  timelineContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  radioButton: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  bulletIcon: {
    width: 14,
    height: 14,
  },
  dashedLine: {
    width: 2,
    height: 10,
    backgroundColor: '#ccc',
    marginTop: 4,
  },
  detailsContainer: {
    flex: 1,
  },
  orderStatus: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  date: {
    fontSize: 12,
    color: '#777',
  },
  time: {
    fontSize: 14,
    color: '#555',
  },
})

export default StatusOrder
