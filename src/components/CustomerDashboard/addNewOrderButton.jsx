import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import themes from '../../theme/theme'

const AddNewOrderButton = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={[styles.button, { backgroundColor: themes.greenLight.button }]} 
            onPress={() => navigation.navigate('NewOrderScreen')}
        >
            <Text style={[styles.text, { color: themes.greenLight.secondary }]}>
                + Add New Order
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 50,
        margin: 15,
        alignItems: 'center',     
        justifyContent: 'center',  
    },
    text: {
        fontSize: 20,
        textAlign: 'center',  
        fontWeight: '600',    
    }
})

export default AddNewOrderButton
