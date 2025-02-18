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
import CustomerDetailsScreen from '../screens/customerDetailScreen/customerDetail';
import RiderDrawerNavigator from './RiderDrawerNavigator';

const Stack = createNativeStackNavigator();
// const AuthenticatedNotificationScreen = withAuth(withLoading(NotificationScreen));

const AppNavigator = () => (
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
      <Stack.Screen name="DeliveredScreen" component={DeliveredScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AnotherOrder" component={AnotherOrder} options={{ headerShown: false }} />
      <Stack.Screen name="CustomerDrawer" component={CustomerDrawerNavigator} options={{headerShown:false}}/>
      <Stack.Screen name="RiderDrawer" component={RiderDrawerNavigator} options={{headerShown:false}}/>
     
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
