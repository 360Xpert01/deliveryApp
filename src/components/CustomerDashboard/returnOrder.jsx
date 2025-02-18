import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import themes from '../../theme/theme'

const ReturnOrder = () => {
    return (
        <SafeAreaView>
            <View style={styles.box}>
                <View style={styles.return}>
                    <Text style={[styles.number, { color: themes.greenLight.button }]}>
                        04
                    </Text>
                </View>
                <View>
                    <Text style={styles.title}>
                        Order Returns
                    </Text>
                    <Text style={styles.text}>
                        Total no. of Order for today.
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 10,
        alignItems: 'center',
        flexDirection: "row",
        gap: 30,
        marginHorizontal: 12,
    },
    number: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
        marginBottom: 4,
    },
    text: {
        fontSize: 12,
        color: '#7D7D7D',
    },
})

export default ReturnOrder
