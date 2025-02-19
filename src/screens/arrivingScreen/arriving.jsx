import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Map from '../../components/Map';
import ArriveButton from '../../components/Arrive/arriveButton';
import CancelButton from '../../components/Arrive/cancelButton';
import COD from '../../components/Arrive/cash';
import Location from '../../components/Arrive/location';
import KHI from '../../components/Arrive/khi';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import MultipleOrder from '../../components/multipleOrder/multipleOrderCard';
import { useOrderContext } from '../../CountContext/newOrderContext';

const ArrivingScreen = () => {
    const { count } = useOrderContext();
    console.log("count" + count);
    
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Map showHelmet={true} showLine={false} />
            {count > 1 && <View style={styles.multiCard}><MultipleOrder /></View>}
            <View style={styles.bottomContainer}>
                <View style={styles.orderSec}>
                    <KHI />
                    <View style={styles.whatsapp}><WhatsAppIcon /></View>
                </View>
                <View style={styles.line} />
                <Location />
                <View style={styles.line} />
                <COD />
                <View style={styles.btnRow}>
                    <CancelButton onPress={() => navigation.navigate('RiderDrawer')} />
                    <ArriveButton />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
    },
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
    multiCard: {
        position: "absolute",
        alignItems: "center",
        width: "100%",
        bottom: "40%",
        zIndex:10,
    }
});

export default ArrivingScreen;
