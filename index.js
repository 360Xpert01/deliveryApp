/**
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler'; 
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/Redux/store'; // Import your Redux store
import App from './App'; // Import your main App component
import { name as appName } from './app.json';
import DrawerNavigatior from './src/navigation/DrawerNavigator';

// Wrap the App with the Redux Provider
const Root = () => (
  <Provider store={store}>
    <App />
    {/* <DrawerNavigatior/> */}
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
