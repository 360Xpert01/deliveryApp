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
import DrawerNavigatior from './DrawerNavigator';
import DeliveredScreen from '../screens/DeliverdScreen/DeliveredScreen';
import AnotherOrder from '../screens/anotherOrderScreen/anotherOrder';
import ActiveLoads from '../screens/activeLoads/activeLoads';

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
      <Stack.Screen name="DeliveredScreen" component={DeliveredScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AnotherOrder" component={AnotherOrder} options={{ headerShown: false }} />
      <Stack.Screen name="ActiveLoads" component={ActiveLoads} options={{ headerShown: false }} />
      
      <Stack.Screen
        name="drawer"
        component={DrawerNavigatior}
        options={({ navigation }) => ({
          title: 'Home',
          headerShown:false,
          headerRight: () => (
            <Icon
              name="bell"
              size={24}
              color="black"
              onPress={() => navigation.navigate('Notifications')}
              style={{ marginRight: 10 }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{ title: 'Notifications' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
