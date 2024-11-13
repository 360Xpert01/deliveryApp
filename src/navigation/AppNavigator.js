import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashScreen/splashScreen';
import LoginScreen from '../screens/loginScreen/loginScreen';
import HomeScreen from '../screens/homeScreen/home'; // Import your Home Screen
import NotificationScreen from '../screens/notificationScreen/notification'; // Import your Notification Screen
import withAuth from '../components/withAuth';
import withLoading from '../components/withLoading';

const Stack = createNativeStackNavigator();

// Wrapping NotificationScreen with auth and loading HOCs
const AuthenticatedNotificationScreen = withAuth(withLoading(NotificationScreen));

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }} 
      />
      <Stack.Screen
        name="Notifications"
        component={AuthenticatedNotificationScreen}
        options={{ title: 'Notifications' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
