import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/theme/themeContext';
import store from './src/Redux/store';
import StorageService from './src/service/storageService';
import { setToken } from './src/Redux/slices/authSlice';

const queryClient = new QueryClient();
// const LoadToken = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const loadStoredToken = async () => {
//       const token = await StorageService.get('authToken');
//       if (token) {
//         dispatch(setToken(token)); // Redux store me token set karo
//       }
//     };
//     loadStoredToken();
//   }, []);

//   return null;
// };

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
// API_KEY="AIzaSyCZHtZ2pKi5y4PkmeeFl4XjuXyB5aTPJ8Q"
