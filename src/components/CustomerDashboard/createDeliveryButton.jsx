import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import themes from '../../theme/theme';

const CreateDeliveryButton = ({ onSubmit }) => {
    
    return (
        <View>
            <TouchableOpacity style={styles.createButton}  onPress={onSubmit}>
                <Text style={styles.createButtonText}>Create Delivery</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    createButton: {
        backgroundColor: themes.greenLight.button,
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 120,
    },
    createButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
    },
})
export default CreateDeliveryButton