import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const dish = require('../../../assets/dish.png');
const ellipse = require('../../../assets/Ellipse.png');
const LocationIcon = require('../../../assets/location.png');

const ActiveCard = ({ codId, location, orderId }) => { 
    const orders = [
        { id: '01', orderId: 'KHI 123545689713', address: '14th Street Pizza Co. Block-7, Gulshan-E-Iqbal', cod: 'COD 11,999' },
        { id: '02', orderId: 'KHI 646543218798', address: 'Gohar Heaven, Block-6, Gulshan-E-Iqbal', cod: 'COD 1,000' }
      ];
    return (
        <TouchableOpacity
            style={styles.card}
        >
            <View style={styles.cardContent}>
                <View style={styles.header}>
                    <View style={styles.row}>
                        <Image source={dish} style={{ width: 20, height: 20 }} />
                        <Text style={styles.orderId}>{orderId}</Text>
                    </View>
                    <Text style={styles.cod}>COD {codId}</Text>
                    <View style={styles.tag}>
                        <Text style={styles.tagText}>{location}</Text>
                    </View>
                </View>
                <View style={styles.addressContainer}>
                    <View style={styles.addressRow}>
                        <Image source={ellipse} style={styles.ellipse} />
                        <Text style={styles.addressText}>
                            14th Street Pizza Co. Block-7, Gulshan-e-Iqbal
                        </Text>
                    </View>
                    <View style={styles.addressRow}>
                        <Image source={LocationIcon} style={{ width: 18, height: 18 }} />
                        <Text style={styles.addressText}>
                            B 121 Block 2, Gulshan-e-Iqbal, Karachi
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        padding: 5,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 10,
    },
    cardContent: {
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        padding: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: wp("1%"),
        marginBottom: hp("1%"),
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },
    orderId: {
        fontSize: wp("3%"),
        fontWeight: "700",
        marginLeft: wp("1%"),
    },
    cod: {
        fontSize: wp("4%"),
        fontWeight: "700",
        color: "#00AA2F",
        lineHeight: hp("3%"),
        letterSpacing: 0.22,
    },
    tag: {
        backgroundColor: "#E0F7FA",
        paddingHorizontal: wp("3%"),
        paddingVertical: hp("0.5%"),
        borderRadius: wp("2%"),
    },
    tagText: {
        fontSize: wp("3%"),
        color: "#00AA2F",
    },
    addressContainer: {
        marginTop: hp("0.5%"),
    },
    addressRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: hp("0.5%"),
        borderRadius: wp("2%"),
        padding: wp("2%"),
        alignSelf: "flex-start",
    },
    addressText: {
        marginLeft: wp("1.5%"),
        fontSize: wp("3%"),
        fontWeight: "400",
        color: "#333",
    },
    ellipse: {
        width: wp("3%"),
        height: wp("3%"),
    },
});

export default ActiveCard;
