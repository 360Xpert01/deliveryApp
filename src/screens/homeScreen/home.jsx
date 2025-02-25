import {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler
} from 'react-native';
import OrderCard from '../../components/ordercard';
import apiClient from '../../Redux/client'; // API Client import karo
import dayjs from 'dayjs';
import {getToken} from '../../service/storageService';
import {useDispatch, useSelector} from 'react-redux';
import {getOrders} from '../../Redux/slices/orders/getOrders';
import themes from '../../theme/theme';
import MultipleOrder from '../../components/multipleOrder/multipleOrderCard';

const SideBarImage = require('../../../assets/sidebar.png');
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState(dayjs());
  const [orders, setOrders] = useState([]); // Orders ko yahan store karenge
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error handling
  const OrdersData = useSelector((state) => state.getOrders?.getOrders);
  // 🕒 Time update karne ke liye useEffect
  // console.log("sdfuysdtgfvsd",OrdersData)
  const apiFetch  = async()=>{
    const res = await dispatch(getOrders()).unwrap();
    // console.log("gfghfghdsfgsdfgj",res)
  };
  useFocusEffect(
    useCallback(() => {
      apiFetch()
    }, [])
  );
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp(); // Exit the app
      return true; // Prevent default behavior
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove(); // Cleanup on unmount
  }, []);
  // useEffect(() => {
  //   apiFetch();
  // }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 📦 API se Orders Fetch karna
  const fetchToken = async () => {
    const token = await getToken();
    // console.log("slguhsduil",token)
  };
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await apiClient.get('/c/5a12-e55b-4f41-95d4'); // API se data fetch karo
        setOrders(response.data); // Orders state update karo
      } catch (err) {
        setError('Failed to fetch orders'); // Error message set karo
      } finally {
        setLoading(false); // Loading khatam
      }
    };

    fetchOrders();
    fetchToken();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navtime}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={SideBarImage} style={styles.img} />
        </TouchableOpacity>
        <Text style={[styles.time, {color: themes.greenLight.button}]}>
          {time.format('hh:mm:ss')}
        </Text>
      </View>

      <View
        style={[
          styles.main,
          {backgroundColor: themes.greenLight.locationBackground},
        ]}>
        {/* Agar Loading ho raha hai to Spinner dikhana */}
        {loading ? (
          <ActivityIndicator size="large" color="#00AA2F" />
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <FlatList
            data={orders}
            keyExtractor={item => item.id} // Unique key
            renderItem={({item}) => (
              <OrderCard
                codId={item.cod}
                location={item.location}
                orderId={item.id}
                navigation={navigation}
              />
            )}
          />
        )}
      </View>
      <View style={styles.multicard}>
          <MultipleOrder />
        </View>
    </SafeAreaView>
  );
};

// 🎨 Styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    flex: 1,
    backgroundColor: '',
  },
  img: {
    height: 58,
    width: 58,
    paddingTop: 51,
    paddingBottom: 21,
    paddingLeft: 15,
  },
  main: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 21,
    paddingBottom: 100,
    height: '90%',
  },
  time: {
    height: 45,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingRight: 20,
  },
  navtime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  multicard: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    bottom: '2%',
    zIndex: 10,
  },
});

export default HomeScreen;
