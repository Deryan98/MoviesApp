import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {LogBox} from 'react-native';
import { AuthProvider } from './src/context/AuthCotext/AuthContext';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => (
  <AuthProvider>
    {children}
  </AuthProvider>
)

export default App;
