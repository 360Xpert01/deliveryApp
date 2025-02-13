import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Image, View, Text, FlatList, TouchableOpacity } from "react-native";
import OrderCard from "../../components/ordercard";
import LeftArrow from '../../assest/arrow-left.png';
import dayjs from "dayjs";
import NewOrder from "../../components/Pick/newOrder";
import themes from "../../theme/theme";


const AnotherOrder = ({ navigation }) => {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleBack = () => {
    navigation.navigate("Arriving");
  };

  const users = [
    { codID: "11,999", location: "Gulistan-e-Jauhor", Id: "KHI 123545689713" },
    { codID: "9,900", location: "Gulistan-e-Jauhor", Id: "KHI 123545689713" },
    { codID: "9,900", location: "Gulistan-e-Jauhor", Id: "KHI 123545689713" },
    
    
  ];

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: themes.greenLight.locationBackground}]}>
      <View style={styles.navtime}>
        <TouchableOpacity onPress={handleBack}>
          <Image source={LeftArrow} style={styles.img} />
        </TouchableOpacity>
        <Text style={styles.time}>{time.format("hh:mm:ss")}</Text>
      </View>
      <View style={[styles.main, {backgroundColor:themes.greenLight.surface}]}>
        <FlatList 
          data={users}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <OrderCard codId={item.codID} location={item.location} orderId={item.Id} navigation={navigation} />
          )}
        />
        
      </View> 
      <View>
        {/* <NewOrder/> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    height: 30,
    width: 30,
  },
  main: {
    backgroundColor: "#F9F9F9",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 25,
    height: "80%",
    // paddingBottom: 100,
    marginTop: 20,
  },
  time: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#00AA2F",
  },
  navtime: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default AnotherOrder;
