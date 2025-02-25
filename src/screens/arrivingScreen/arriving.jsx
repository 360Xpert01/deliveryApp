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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useDispatch , useSelector} from 'react-redux';

const ArrivingScreen = ({route}) => {
    const {item} = route.params;
    console.log("jwhgljasg",item)
    const { count } = useOrderContext();
    const dispatch = useDispatch();
    console.log("count" + count);
    // const data = useSelector((state) => state.getOrdersId?.getOrdersId?.data);
    // console.log("sdfgsf",data)
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Map showHelmet={true} showLine={false} staticHelmet={true}/>
            {count > 1 && <View style={styles.multiCard}><MultipleOrder /></View>}
            <View style={styles.bottomContainer}>
                <View style={styles.orderSec}>
                    <KHI orderNum={item?.order_number}/>
                    <View style={styles.whatsapp}><WhatsAppIcon /></View>
                </View>
                <View style={styles.line} />
                <Location location={item?.pickup_location} />
                <View style={styles.line} />
                <COD amount={item?.amount} paymentMethod={item?.payment_method}/>
                <View style={styles.btnRow}>
                    <CancelButton onPress={() => navigation.navigate('RiderDrawer')} />
                    <ArriveButton item={item} />
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
        borderTopLeftRadius: wp("8%"),
        borderTopRightRadius: wp("8%"),
        padding: wp("5%"),
        elevation: 10,
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: hp("1.5%"),
    },
    line: {
        marginVertical: hp("2.5%"),
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
        padding: wp("2.5%"),
        backgroundColor: "white",
        borderRadius: wp("10%"),
        elevation: 5,
    },
    multiCard: {
        position: "absolute",
        alignItems: "center",
        width: "100%",
        bottom: hp("40%"),
        zIndex: 10,
    }
});

export default ArrivingScreen;
