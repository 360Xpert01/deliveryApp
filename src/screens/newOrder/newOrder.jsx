import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,ScrollView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CreateDeliveryButton from '../../components/CustomerDashboard/createDeliveryButton';
import themes from '../../theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { createOrders } from '../../Redux/slices/customer/createOrder';

const backButton = require('../../assest/arrow-left.png');

const NewOrderScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {token} = useSelector((state) => state.auth);


    
    // console.log("esgsregrsdstfg",waiz)
    const [form, setForm] = useState({
        fullName: '',
        mobileNumber: '',
        email:'',
        // zone: '',
        address: '',
        // orderNumber: '',
        cod: '',
        payment:''
    });

    const handleChange = (name, value) => {
        setForm({ ...form, [name]: value });
    };
//createOrders
    const placeholders = [
        { label: 'Full Name', key: 'fullName' },
        { label: 'Customer Mobile Number', key: 'mobileNumber' },
        { label: 'Customer Email', key: 'email' },
        // { label: 'Zone', key: 'zone' },
        { label: 'Customer Address', key: 'address' },
        // { label: 'Order Number (Restaurant)', key: 'orderNumber' },
        { label: 'COD (Amount)', key: 'cod' },
        { label: 'Payment Method', key: 'payment' },
    ];

    const handelSubmit = async()=>{
        console.log("zsjkdhs",form?.fullName)
        const body ={
            
                "fullname": form?.fullName,
                "email":form?.email,
                "phone_number": form?.mobileNumber,
                "address": form?.address,
                "city_id": "c3d337e6-4123-44e9-ab23-20a3f7f14853",
                "country_id": "c3d337e6-4123-44e9-ab23-20a3f7f14893",
                "amount": form?.cod,
                "payment_method": form?.payment,
                payment_status: "unpaid",
                pickup_location:  "akschj"
                // {
                //     "latitude": 24.9167871,
                //     "longitude": 67.0859261
                //   }
              
        }
        console.log("fsdassjgs",body)
        try {
            const res = await dispatch(createOrders({body,token})).unwrap()
            console.log("eafesd",res)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <ScrollView style={styles.container}>
           
            <View style={styles.head}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image source={backButton} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>New Order</Text>
            </View>
            <View>

                {placeholders.map(({ label, key }) => (
                    <TextInput
                        key={key}
                        style={[styles.input, {borderColor: themes.greenLight.shadow, shadowColor:themes.greenLight.shadow, color:themes.greenLight.shadow ,backgroundColor: themes.greenLight.secondary}]}
                        placeholder={label}
                        placeholderTextColor={themes.greenLight.gray}
                        onChangeText={(value) => handleChange(key, value)}
                    />
                ))}

                <CreateDeliveryButton onSubmit={handelSubmit}  />

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 20,
        paddingTop: 20,
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
