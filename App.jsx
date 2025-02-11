import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/theme/themeContext';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
