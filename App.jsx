import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/theme/themeContext';
import loadDetails from './src/screens/loadDetails/LoadDetailsScreen';
import LoadDetailsScreen from './src/screens/loadDetails/LoadDetailsScreen';



const queryClient = new QueryClient();

const App = () => (
  // <QueryClientProvider client={queryClient}>
  //   <ThemeProvider>
  //     <AppNavigator />
  //   </ThemeProvider>
  // </QueryClientProvider>
  <LoadDetailsScreen/>
  
  
);

export default App;
