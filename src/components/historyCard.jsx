import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import themes from "../theme/theme";

const dish = require("../../assets/dish.png");
const ellipse = require("../../assets/Ellipse.png");
const locationIcon = require("../../assets/location.png"); 

const HistoryCard = ({ codId, place, orderId, navigation, distance, status }) => { 
    const statusColor = status === "Delivered" ? themes.greenDark.success : themes.greenDark.error;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("LoadDetail", { orderId, codId, place })}
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
                        <Text style={styles.tagText}>{place}</Text>
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
                    <View style={styles.distance}>
                        <Text style={styles.addressText}>Distance {distance} km</Text>
                        <View style={[styles.tag, { backgroundColor: statusColor }]}>
                            <Text style={[styles.tagText, { color: themes.greenDark.text.primary }]}>{status}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 0,
        borderRadius: wp(3),
        padding: wp(3),
        marginVertical: hp(1),
        marginHorizontal: wp(5), 
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5, 
        width: wp(90), 
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: wp(1.5),
        marginBottom: hp(1),
    },
    distance: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        width: wp(5),
        height: wp(5),
    },
    orderId: {
        fontSize: wp(3),
        fontWeight: "700",
        marginLeft: wp(1),
    },
    cod: {
        fontSize: wp(4),
        fontWeight: "700",
        color: "#00AA2F",
        lineHeight: hp(2.5),
        letterSpacing: 0.22,
    },
    tag: {
        paddingHorizontal: wp(3),
        paddingVertical: hp(0.5),
        borderRadius: wp(2.5),
        alignSelf: "flex-start",
    },
    tagText: {
        fontSize: wp(3),
        fontWeight: "600",
        textTransform: "capitalize",
    },
    addressContainer: {
        marginTop: hp(0.5),
        marginLeft: wp(1),
    },
    addressRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: hp(0.5),
        borderRadius: wp(1.5),
        padding: wp(2),
        alignSelf: "flex-start",
    },
    addressText: {
        marginLeft: wp(2),
        fontSize: wp(3),
        fontWeight: "400",
        color: "#333",
    },
    ellipse: {
        width: wp(3.5),
        height: wp(3.5),
    },
});

export default HistoryCard;
