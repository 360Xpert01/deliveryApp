import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native';
import PickButton from '../../components/Arrive/pickButton';
import Arrow from '../../components/Arrive/arrow';
import Order from '../../components/Arrive/order';
import Location from '../../components/Arrive/location';
import COD from '../../components/Arrive/cash';
import Map from '../../components/Map';
import CancelButton from '../../components/Arrive/cancelButton';
import ArrivedButton from '../../components/Arrive/arrivedButton';
import { useNavigation } from '@react-navigation/native';

import WhatsAppIcon from '../../components/WhatsAppIcon';

const Arrived = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Map />
                <View style={styles.section}>
                    <PickButton />
                    <Arrow />
                </View>

                <View style={styles.bottomContainer}>
                    <View style={styles.orderSec}>
                        <Order />
                        <View style={styles.wahtsapp} >
                            <WhatsAppIcon />
                        </View>

                    </View>
                    <View style={styles.line} />
                    <Location />
                    <View style={styles.line} />
                    <COD />
                    <View style={styles.btnRow}>
                        <CancelButton onPress={() => navigation.navigate('Arriving')} />
                        <ArrivedButton />
                    </View>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
    },
    bottomContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        gap: 20,
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    orderSec: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
    line: {
        marginVertical: 20,
        height: 1,
        backgroundColor: '#E4E4E4',
        width: '100%',
    },
    wahtsapp: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 50,
        elevation: 5,
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
});

export default Arrived