import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CreateDeliveryButton from '../../components/CustomerDashboard/createDeliveryButton';
import themes from '../../theme/theme';

const backButton = require('../../assest/arrow-left.png');

const NewOrderScreen = () => {
    const navigation = useNavigation();
    const [form, setForm] = useState({
        fullName: '',
        mobileNumber: '',
        zone: '',
        address: '',
        orderNumber: '',
        cod: '',
    });

    const handleChange = (name, value) => {
        setForm({ ...form, [name]: value });
    };

    const placeholders = [
        { label: 'Full Name', key: 'fullName' },
        { label: 'Customer Mobile Number', key: 'mobileNumber' },
        { label: 'Zone', key: 'zone' },
        { label: 'Customer Address', key: 'address' },
        { label: 'Order Number (Restaurant)', key: 'orderNumber' },
        { label: 'COD (Amount)', key: 'cod' },
    ];

    return (
        <View style={styles.container}>
           
            <View style={styles.head}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image source={backButton} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>New Order</Text>
            </View>
            =<View>

                {placeholders.map(({ label, key }) => (
                    <TextInput
                        key={key}
                        style={[styles.input, {borderColor: themes.greenLight.shadow, shadowColor:themes.greenLight.shadow, backgroundColor: themes.greenLight.secondary}]}
                        placeholder={label}
                        placeholderTextColor={themes.greenLight.gray}
                        onChangeText={(value) => handleChange(key, value)}
                    />
                ))}

                <CreateDeliveryButton />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    head: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    backButton: {
        marginRight: 10,
    },
    backIcon: {
        width: 30,
        height: 30,
        padding: 15,
        backgroundColor: "white",
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10,
        margin: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    input: {
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        fontSize: 16,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 10,
    },
    

});

export default NewOrderScreen;
