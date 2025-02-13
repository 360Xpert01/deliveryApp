import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const dish = require("../../assets/dish.png");
const ellipse = require("../../assets/Ellipse.png");
const locationIcon = require("../../assets/location.png");

const OrderCard = ({ codId, location, orderId, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("LoadDetail", { orderId, codId, location })}
            style={styles.card}
        >
            <View>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.row}>
                        <Image source={dish} style={styles.icon} />
                        <Text style={styles.orderId}>{orderId}</Text>
                    </View>
                    <Text style={styles.cod}>COD {codId}</Text>
                    <View style={styles.tag}>
                        <Text style={styles.tagText}>{location}</Text>
                    </View>
                </View>

                {/* Address List */}
                <View style={styles.addressContainer}>
                    <View style={styles.addressRow}>
                        <Image source={ellipse} style={styles.ellipse} />
                        <Text style={styles.addressText}>
                            14th Street Pizza Co. Block-7, Gulshan-e-Iqbal
                        </Text>
                    </View>
                    <View style={styles.addressRow}>
                        <Image source={locationIcon} style={styles.icon} />
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
        borderWidth: 0,
        borderRadius: wp("3%"),
        padding: wp("3%"),
        marginVertical: hp("1%"),
        marginHorizontal: wp("5%"),
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5,
        width: wp("90%"),
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: wp("1%"),
        marginBottom: hp("1%"),
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        width: wp("4%"),
        height: wp("4%"),
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

export default OrderCard;