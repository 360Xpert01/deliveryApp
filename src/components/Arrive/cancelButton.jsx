import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import themes from '../../theme/theme'

const CancelButton = ({ onPress }) => {
    return (
        <View>
            <TouchableOpacity style={[styles.btn, { borderColor: themes.greenLight.btnRed}]} onPress={onPress}>
                <Text style={[styles.btnText, { color: themes.greenLight.btnRed}]}>
                    Cancel
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderWidth: 1,
        width: 100,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 50
    },
    btnText: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: 600,
    }
})

export default CancelButton