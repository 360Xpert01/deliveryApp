import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import themes from '../../theme/theme'

const AddNewOrderButton = () => {
    return (
        <View style={[styles.button, { backgroundColor: themes.greenLight.button }]}>
            <Text style={[styles.text, { color: themes.greenLight.secondary }]}> + Add New Order</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 50,
        margin: 15,

    },
    text: {
        fontSize: 20,
        paddingHorizontal: 70,
    }
})
export default AddNewOrderButton