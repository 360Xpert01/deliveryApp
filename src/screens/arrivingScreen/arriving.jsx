import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Map from '../../components/Map';
import ArriveButton from '../../components/Arrive/arriveButton';
import CancelButton from '../../components/Arrive/cancelButton';
import COD from '../../components/Arrive/cash';
import Location from '../../components/Arrive/location';
import { useNavigation } from '@react-navigation/native';
import KHI from '../../components/Arrive/khi';
import WhatsAppIcon from '../../components/WhatsAppIcon';

const ArrivingScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [animate, setAnimate] = useState(false); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true); 
        }, 2000);

        return () => clearTimeout(timer); 
    }, []);

    return (
        <View style={styles.container}>
            <Map showHelmet={true} showLine={false} />

            <View style={styles.bottomContainer}>
                <View style={styles.orderSec}>
                    <KHI />
                    <View style={styles.whatsapp}>
                        <WhatsAppIcon />
                    </View>
                </View>

                <View style={styles.line} />
                <Location style={styles.location} />
                <View style={styles.line} />
                <COD />
                <View style={styles.btnRow}>
                    <CancelButton onPress={() => navigation.navigate('drawer')} />
                    <ArriveButton />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    bottomContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        elevation: 10,
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 10,
    },
    line: {
        marginVertical: 20,
        height: 1,
        backgroundColor: '#E4E4E4',
        width: '100%',
    },
    orderSec: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    whatsapp: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 50,
        elevation: 5,
    },
});

export default ArrivingScreen;
