import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {Movie} from '../interfaces/movieInterface';
import LoginScreen from '../screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import SearchScreen from '../screens/SearchScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
  LoginScreen: undefined;
  SearchScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          // backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Movies Home'}}
      />

      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{title: 'Details'}}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{title: 'Search'}}
      />
    </Stack.Navigator>
  );
};
