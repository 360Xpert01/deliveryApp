import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useOrder } from '../../CountContext/orderContext'; // Import context
import PickButton from '../../components/Arrive/pickButton';
import Arrow from '../../components/Arrive/arrow';
import Order from '../../components/Arrive/order';
import Location from '../../components/Arrive/location';
import COD from '../../components/Arrive/cash';
import Map from '../../components/Map';
import CancelButton from '../../components/Arrive/cancelButton';
import ArrivedButton from '../../components/Arrive/arrivedButton';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import MultipleOrder from '../../components/multipleOrder/multipleOrderCard';
import { useOrderContext } from '../../CountContext/newOrderContext';

const Arrived = () => {
    const { count } = useOrderContext(); 
    console.log("count" + count);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Map />
            
            {/* Show MultipleOrder card if count > 1 */}
            {count > 1 && (
                <View style={styles.multiCard}>
                    <MultipleOrder />
                </View>
            )}

            <View style={styles.section}>
                <PickButton />
                <Arrow />
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.orderSec}>
                    <Order />
                    <View style={styles.whatsapp}>
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
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    bottomContainer: {
        width: '100%',
        backgroundColor: 'white',
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
    whatsapp: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 50,
        elevation: 5,
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        bottom: "10%",
    },
    multiCard: {
        position: "absolute",
        alignItems: "center",
        width: "100%",
        bottom: "40%",
        zIndex: 10,
    }
});

export default Arrived;
