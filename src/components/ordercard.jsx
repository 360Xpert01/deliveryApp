import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
const dish = require("../../assets/dish.png")
const ellipse = require("../../assets/Ellipse.png")
const location = require("../../assets/location.png")
import themes from "../theme/theme";

const OrderCard = ({ codId, location, orderId, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("LoadDetail", { orderId, codId, location })}
            style={styles.card}
        >
            <View style={styles.card}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.row}>
                        <Image source={dish} style={{ width: 22, height: 22 }} />
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
                        <Icon name="location-on" size={18} style={styles.locationIcon} />
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
        borderRadius: 14,
        padding: 10,
        margin: 10,
        // color:themes.greenLight.locationLogo,
        color: "#0BAD5E"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,

    },
    row: {
        flexDirection: "row",
        alignItems: "center",

    },
    orderId: {
        fontSize: 9.5,
        fontWeight: 700,
        marginLeft: 5,


    },
    cod: {
        fontSize: 15,
        fontWeight: 700,
        // color:themes.greenLight.text.codColor,
        color: "#00AA2F",
        lineHeight: 28.22,
        letterSpacing: 0.22,

    },
    tag: {
        backgroundColor: "#E0F7FA",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        // width:58,

    },
    tagText: {
        fontSize: 12,
        color: "#00AA2F",
    },
    addressContainer: {
        marginTop: 2,
    },
    addressRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 4,
        backgroundColor: themes.greenLight.addressrowcolor,
        backgroundColor: "#F9F9F9",
        borderRadius: 6,
        padding: 5,
        alignSelf: "flex-start",
    },
    addressText: {
        marginLeft: 5,
        fontSize: 12,
        fontWeight: 400,
        color: "#333",
    },
    ellipse: {
        width: 13,
        height: 13,
    },
    locationIcon: {
        color: '#0BAD5E'
    }
});

export default OrderCard;