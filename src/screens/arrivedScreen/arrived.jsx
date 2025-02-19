import React from 'react';
import { StyleSheet, View } from 'react-native';
import PickButton from '../../components/Arrive/pickButton';
import Arrow from '../../components/Arrive/arrow';
import Order from '../../components/Arrive/order';
import Location from '../../components/Arrive/location';
import COD from '../../components/Arrive/cash';
import Map from '../../components/Map';
import CancelButton from '../../components/Arrive/cancelButton';
import ArrivedButton from '../../components/Arrive/arrivedButton';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import MultiOrder from '../../components/multipleOrder/multipleOrderCard';
import { useNavigation, useRoute } from '@react-navigation/native';

const Arrived = () => {
    const route = useRoute();  
    const { count } = route.params || {};  
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Map />
            <View style={styles.section}>
                <PickButton />
                <Arrow />
            </View>

            
            {count === 2 && <MultiOrder />}

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
    container: {
        flex: 1,
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
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
});

export default Arrived;
