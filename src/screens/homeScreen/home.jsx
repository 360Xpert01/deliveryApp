import { useState, useEffect } from "react";
import { 
  SafeAreaView, 
  StyleSheet, 
  Image, 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  ActivityIndicator 
} from "react-native";
import OrderCard from "../../components/ordercard"; 
import apiClient from "../../Redux/client"; // API Client import karo
import dayjs from "dayjs";

const SideBarImage = require("../../../assets/sidebar.png");

const HomeScreen = ({ navigation }) => {
  const [time, setTime] = useState(dayjs());
  const [orders, setOrders] = useState([]); // Orders ko yahan store karenge
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error handling

  // 🕒 Time update karne ke liye useEffect
  // console.log("asfhwgsfhkg",orders)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 📦 API se Orders Fetch karna
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await apiClient.get("/c/db1b-70b6-49ed-bf20"); // API se data fetch karo
        setOrders(response.data); // Orders state update karo
      } catch (err) {
        setError("Failed to fetch orders"); // Error message set karo
      } finally {
        setLoading(false); // Loading khatam
      }
    };

    fetchOrders();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navtime}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={SideBarImage} style={styles.img} />
        </TouchableOpacity>
        <Text style={styles.time}>{time.format("hh:mm:ss")}</Text>
      </View>

      <View style={styles.main}>
        {/* Agar Loading ho raha hai to Spinner dikhana */}
        {loading ? (
          <ActivityIndicator size="large" color="#00AA2F" />
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <FlatList
            data={orders}
            keyExtractor={(item) => item.id} // Unique key
            renderItem={({ item }) => (
              <OrderCard 
                codId={item.cod} 
                location={item.location} 
                orderId={item.id} 
                drop={item.drop}
                pickUp={item.pickUp}
                navigation={navigation} 
                item={item}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

// 🎨 Styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    flex: 1,
    backgroundColor: "",
  },
  img: {
    height: 58,
    width: 58,
    paddingTop: 51,
    paddingBottom: 21,
    paddingLeft: 15,
  },
  main: {
    backgroundColor: "#F9F9F9",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 21,
    paddingBottom: 100,
  },
  time: {
    height: 45,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#00AA2F",
    paddingRight: 20,
  },
  navtime: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  error: {
    color: "red",
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
  },
});

export default HomeScreen;
