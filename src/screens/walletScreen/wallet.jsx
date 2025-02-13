import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useTheme } from "../../theme/themeContext"; // Import theme
import { useNavigation } from "@react-navigation/native";

const SidebarImg = require("../../../assets/sidebar.png");

const transactions = [
  { id: "1", title: "KHI 123545689713", amount: -100, balance: 15400, type: "transfer" },
  { id: "2", title: "KHI 123545682378", amount: -100, balance: 15500, type: "transfer" },
  { id: "3", title: "TOP-UP Ali Associate", amount: 1000, balance: 15600, type: "topup" },
  { id: "4", title: "KHI 123545675432", amount: -100, balance: 15700, type: "transfer" },
  { id: "5", title: "KHI 123545648765", amount: -100, balance: 15800, type: "transfer" },
  { id: "6", title: "TOP-UP John Doe", amount: 1000, balance: 15900, type: "topup" },
  { id: "7", title: "KHI 123545612345", amount: -100, balance: 16000, type: "transfer" },
];

const TransactionCard = ({ title, amount, balance, type, theme }) => {
  const transactionImage = type === "topup"
    ? require("../../assets/Vector.png")
    : require("../../../assets/dish.png");

  const imageStyle = type === "topup" ? styles.topupImg : styles.transferImg;

  return (
    <View style={[styles.card, { borderBottomColor: theme.border }]}>
      <View style={styles.caard}>
        <Image source={transactionImage} style={imageStyle} />
        <View style={styles.transactionInfo}>
          <Text style={[styles.title, { color: theme.text.primary }]}>{title}</Text>
          <Text style={[styles.dateText, { color: theme.text.secondary }]}>02-04-2025 11:48 AM</Text>
        </View>
      </View>
      <Text style={[styles.amount, { color: type === "topup" ? theme.success : theme.error }]}>
        {amount}
      </Text>
      <Text style={[styles.balance, { color: theme.success }]}>{balance}</Text>
    </View>
  );
};

const WalletScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={SidebarImg} style={styles.img} />
        </TouchableOpacity>
        <Text style={[styles.waltext, { color: theme.text.primary }]}>Your Wallet</Text>
      </View>

      <View style={[styles.balanceContainer, { backgroundColor: theme.primary }]}>
        <Text style={styles.balanceText}>
          <Text style={[styles.blackText, { color: theme.text.onPrimary }]}>PKR</Text>
          <Text style={[styles.whiteText, { color: theme.text.onPrimary }]}> 15,400</Text>
        </Text>
      </View>

      <View>
        <View style={[styles.listHeader, { backgroundColor: theme.surface }]}>
          <Text style={styles.columnHeader}>Details</Text>
          <Text style={[styles.columnHeader, styles.columnHeader2]}>Transfer</Text>
          <Text style={styles.columnHeader}>Balance</Text>
        </View>

        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard {...item} theme={theme} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  waltext: {
    fontSize: 31,
    fontWeight: "700",
    textAlign: "center",
    flex: 1,
    marginRight: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  balanceContainer: {
    padding: 15,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 22,
    width: "90%",
    alignSelf: "center",
  },
  blackText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  whiteText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 60,
    marginTop: 15,
  },
  columnHeader: {
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    fontSize: 12,
  },
  columnHeader2: {
    paddingLeft: 40,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
  },
  caard: {
    flexDirection: "row",
  },
  title: {
    flex: 2,
    fontSize: 12,
    fontWeight: "700",
  },
  dateText: {
    fontSize: 10,
    fontWeight: "400",
  },
  amount: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  balance: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  img: {
    width: 65,
    height: 65,
  },
  topupImg: {
    height: 18,
    width: 21,
  },
  transferImg: {
    height: 26,
    width: 26,
  },
});

export default WalletScreen;
