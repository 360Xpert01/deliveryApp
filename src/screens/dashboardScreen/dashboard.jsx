import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  BackHandler,
} from 'react-native';
import OrderCard from '../../components/ordercard';
import apiClient from '../../Redux/client';
import dayjs from 'dayjs';
import FilterOrder from '../../components/filterOrder';
import themes from '../../theme/theme';
import CustomerCard from '../../components/customerCard';
import { useDispatch } from 'react-redux';
import AllOrderCard from '../../components/AllOrderCard';

const SideBarImage = require('../../../assets/sidebar.png');

const Dashboard = ({navigation}) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState(dayjs());
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState("All");

    const users = [
      { codID: "PRE PAID", area: "DHA", location: "Gulistan-e-Jauhor", Id: "KHI 123545689711", status: "Delivered", riderName: "Umair Kalam" },
      { codID: "9,800", area: "DHA", location: "Gulistan-e-Jauhor", Id: "KHI 123545689712", status: "Returned", riderName: "Umair Kalam" },
      { codID: "1,999", area: "DHA", location: "Gulistan-e-Jauhor", Id: "KHI 123545689713", status: "Delivered", riderName: "Umair Kalam" },
      { codID: "4,295", area: "DHA", location: "Gulistan-e-Jauhor", Id: "KHI 123545689714", status: "Returned", riderName: "Umair Kalam" },
      { codID: "1,800", area: "DHA", location: "Gulistan-e-Jauhor", Id: "KHI 123545689715", status: "Delivered", riderName: "Umair Kalam" },
      { codID: "5,208", area: "DHA", location: "Gulistan-e-Jauhor", Id: "KHI 123545689716", status: "Returned", riderName: "Umair Kalam" },
      { codID: "5,208", area: "DHA", location: "Gulistan-e-Jauhor", Id: "KHI 123545689717", status: "Delivered", riderName: "Umair Kalam" },
      { codID: "5,208", area: "DHA", location: "Huzaifa-e-Jauhor", Id: "KHI 123545689718", status: "Returned", riderName: "Umair Kalam" },
    ];
  
    const filteredOrders = selectedFilter === "All" ? users : users.filter(user => user.status === selectedFilter);


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await apiClient.get('/c/5a12-e55b-4f41-95d4');
        setOrders(response.data);
      } catch (err) {
        setError('Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert('Hold on!', 'Are you sure you want to exit?', [
  //       { text: 'Cancel', onPress: () => null, style: 'cancel' },
  //       { text: 'Exit', onPress: () => BackHandler.exitApp() },
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

  //   return () => backHandler.remove();
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navtime}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={SideBarImage} style={styles.img} />
        </TouchableOpacity>
        <Text style={styles.time}>{time.format('hh:mm:ss')}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.number}>{orders.length}</Text>
            <Text style={styles.label}>Total Orders</Text>
            <Text style={styles.label2}>Total no of Order for today</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.number}>{orders.filter(o => o.status === 'active').length}</Text>
            <Text style={styles.label}>Active Orders</Text>
            <Text style={styles.label2}>Total no of Order for today</Text>
          </View>
        </View>
        <View style={[styles.card2, styles.fullWidth]}>
          <Text style={styles.number}>{orders.filter(o => o.status === 'returned').length}</Text>
          <View>
            <Text style={styles.label3}>Order Returns</Text>
            <Text style={styles.label2}>Total no of Order for today</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewOrderScreen')}>
          <Text style={styles.buttonText}>+ Add New Order</Text>
        </TouchableOpacity>
      </View>
      <FilterOrder setSelectedFilter={setSelectedFilter} />

      <View style={styles.main}>
        {loading ? (
          <ActivityIndicator size="large" color="#00AA2F" />
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <FlatList
          data={filteredOrders}
          keyExtractor={(item) => item.Id}
          renderItem={({ item }) => (
            <AllOrderCard 
              area={item.area} 
              codId={item.codID} 
              location={item.location} 
              orderId={item.Id} 
              riderName={item.riderName} 
              status={item.status} 
              navigation={navigation} 
            />
          )}
        />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 14,
    backgroundColor: '#F5F5F5',
  },
  buttonContainer: {
    alignItems:'center'
  },
  img: {
    height: 58,
    width: 58,
  },
  navtime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00AA2F',
    paddingRight: 20,
  },
  statsContainer: {
    padding: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    shadowOpacity: 0.1,
    elevation: 5,
    paddingLeft: 0,
    width: '48%',
    marginBottom: 10,
  },
  card2: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    display:'flex',
    flexDirection:'row',
    shadowOpacity: 0.1,
    elevation: 5,
    paddingLeft: 0,
    width: '48%',
    marginBottom: 10,
  },
  fullWidth: {
    width: '100%',
  },
  number: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0AAA4D',
    marginLeft: 15
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:15
  },
  label3: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:15,
    marginTop:10
  },
  label2: {
    fontSize: 10,
    marginLeft:15,
    fontWeight: 'bold',
    color:themes.greenLight.input.border
  },
  main: {
    backgroundColor: '#F9F9F9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 11,
    paddingBottom: 100,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0AAA4D',
    padding: 10,
    borderRadius: 18,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Dashboard;
