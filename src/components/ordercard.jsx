import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
const dish = require("../../assets/dish.png");
const ellipse = require("../../assets/Ellipse.png");
import LocationIcon from '../assest/location.png'
import themes from "../theme/theme";

const OrderCard = ({ codId, location, orderId, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("LoadDetail", { orderId, codId, location })}
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
                        <Image source={LocationIcon} style={{ width: 18, height: 18 }}/>
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
        justifyContent: "space-between",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },
    orderId: {
        fontSize: 10,
        fontWeight: "700",
    },
    cod: {
        fontSize: 15,
        fontWeight: "700",
        color: "#00AA2F",
        lineHeight: 28.22,
        letterSpacing: 0.22,
    },
    tag: {
        backgroundColor: "#E0F7FA",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
    },
    tagText: {
        fontSize: 10,
        color: "#00AA2F",
    },
    addressContainer: {
        marginTop: 2,
    },
    addressRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 4,
        backgroundColor: "#F9F9F9",
        borderRadius: 6,
        padding: 5,
        alignSelf: "flex-start",
    },
    addressText: {
        marginLeft: 5,
        fontSize: 12,
        fontWeight: "400",
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
