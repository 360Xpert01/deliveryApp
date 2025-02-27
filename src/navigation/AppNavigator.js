import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashScreen/splashScreen';
import LoginScreen from '../screens/loginScreen/loginScreen';
import HomeScreen from '../screens/homeScreen/home';
import NotificationScreen from '../screens/notificationScreen/notification';
import Icon from 'react-native-vector-icons/FontAwesome';
import withAuth from '../components/withAuth';
import withLoading from '../components/withLoading';
import ArrivingScreen from '../screens/arrivingScreen/arriving';
import PickScreen from '../screens/pickScreen/pickedScreen';
import Arrived from '../screens/arrivedScreen/arrived';
import DeliverScreen from '../screens/deliverScreen/deliverScreen';
import ArriveButton from '../components/Arrive/arriveButton';
import LoadDetailsScreen from '../screens/LoadDetailScreen/loadDetail';
import RiderDrawerNavigatior from './RiderDrawerNavigator';
import DeliveredScreen from '../screens/DeliverdScreen/DeliveredScreen';
import AnotherOrder from '../screens/anotherOrderScreen/anotherOrder';
import CustomerDrawerNavigator from './CustomerDrawerNavigator';
import NewOrderScreen from '../screens/newOrder/newOrder';
import CustomerDetailsScreen from '../screens/customerDetailScreen/customerDetail';
import ActiveLoads from '../screens/activeLoads/activeLoads';
import { OrderProvider } from "../CountContext/orderContext"; 
import OrderSelectionScreen from '../components/multipleOrder/OrderSelectionScreen';
import AllOrder from '../screens/allOrderScreen/allOrder';
import OrderDetailsScreen from '../screens/customerOrderDetails/customerOrderDetails';
import BookingDetailsScreen from "../screens/bookingScreen/bookingDetails"

const Stack = createNativeStackNavigator();
// const AuthenticatedNotificationScreen = withAuth(withLoading(NotificationScreen));

const AppNavigator = () => (
  <OrderProvider>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Arriving" component={ArrivingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Pick" component={PickScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Arrive" component={ArriveButton} options={{ headerShown: false }} />
      <Stack.Screen name="Arrived" component={Arrived} options={{ headerShown: false }} />
      <Stack.Screen name="Delivered" component={DeliverScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoadDetail" component={LoadDetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CustomerDetail" component={CustomerDetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OrderDetail" component={OrderDetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DeliveredScreen" component={DeliveredScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AnotherOrder" component={AnotherOrder} options={{ headerShown: false }} />
      <Stack.Screen name="ActiveLoads" component={ActiveLoads} options={{ headerShown: false }} />
      <Stack.Screen name="CustomerDrawer" component={CustomerDrawerNavigator} options={{headerShown:false}}/>
      <Stack.Screen name="RiderDrawer" component={RiderDrawerNavigatior} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="OrderSelection" component={OrderSelectionScreen} options={{headerShown:false}}/>
      <Stack.Screen name="NewOrderScreen" component={NewOrderScreen} options={{headerShown:false}} />
      <Stack.Screen name="BookingDetails" component={BookingDetailsScreen} options={{headerShown:false}} />
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{ title: 'Notifications' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  </OrderProvider>
);

export default AppNavigator;