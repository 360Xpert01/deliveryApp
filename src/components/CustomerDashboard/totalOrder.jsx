import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import themes from '../../theme/theme'

const TotalOrder = () => {
    return (
        <SafeAreaView>
            <View style={styles.box}>
                <Text style={[styles.number, { color: themes.greenLight.button }]}>
                    304
                </Text>
                <Text style={styles.title}>
                    Total Orders
                </Text>
                <Text style={styles.text}>
                    Total no. of Order for today.
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
    },
    number: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        marginBottom: 4,
    },
    text: {
        fontSize: 10,
        color: '#7D7D7D',
    },
})

export default TotalOrder
