import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const ReturnButton = () => {
    return (
        <View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>
                    Returned
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderColor: "#CD2222",
        borderWidth: 1,
        width: 100,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50
    },
    btnText: {
        color: "#CD2222",
        fontSize: 10,
        textAlign: "center",
        fontWeight: 500,
    }
})

export default ReturnButton