import React,{useEffect} from "react";
import { SafeAreaView, ScrollView, StyleSheet, Image, View, Text, FlatList, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import OrderCard from "../../components/ordercard";
import themes from "../../theme/theme";
import HistoryCard from "../../components/historyCard";
import { useSelector,useDispatch } from "react-redux";
import { getOrdersHistory } from "../../Redux/slices/orders/orderHistory";
const SideBarImage = require("../../../assets/sidebar.png");


const BookingHistory = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation(); 
  const {token} = useSelector((state) => state.auth);
  const history = useSelector((state) => state.getOrdersHistory?.getOrdersHistory);
  console.log("dserwerafk",token)
  
  const getOrder = async ()=>{
    if(token){
      const res = await dispatch(getOrdersHistory({token})).unwrap();
      console.log("efgsfvs",res);
    }else{
      Alert.alert("token not found")
    }
  }
  useEffect(() => {
    getOrder()
  }, [])
  const users = [
    {
      codID: "11, 999",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Delivered',
      distance:1.6 
    },
    {
      codID: "9,800",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Returned',
      distance:1.6 
    },
    {
      codID: "1,999",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Delivered',
      distance:1.6 
    },
    {
      codID: "4,295",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Returned',
      distance:1.6 
    },
    {
      codID: "1,800",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Delivered',
      distance:1.6 
    },
    {
      codID: "5,208",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Returned',
      distance:1.6 
    },
    {
      codID: "5,208",
      location: "Gulistan-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Delivered',
      distance:1.6 
    },
    {
      codID: "5,208",
      location: "Huzaifa-e-Jauhor",
      Id: "KHI 123545689713",
      status:'Returned',
      distance:1.6 
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navtime}>
        {/* Add an onPress event to the Image to open the drawer */}
        <Image
          source={SideBarImage}
          style={styles.img}
          onTouchEnd={() => navigation.openDrawer()} // This will open the drawer when clicked
        />
        <Text style={styles.time}>Order History</Text>
      </View>
      <View style={styles.main}>
        <View>
          <FlatList
            data={users}
            renderItem={({ item }) => (
              <HistoryCard codId={item.codID} location={item.location} orderId={item.Id} distance={item.distance} status={item.status} navigation={navigation} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    flex: 1,
    backgroundColor: "#fff",
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
    paddingTop: 2,
    paddingBottom: 100,
  },
  time: {
    height: 45,
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    justifyContent:'center',
    textAlign: "center",
    // textAlignVertical: "center",
    color: themes.primary,
    paddingRight: 20,
  },
  navtime: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
});

export default BookingHistory;