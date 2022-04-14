import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {Movie} from '../interfaces/movieInterface';
import LoginScreen from '../screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
  LoginScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  React.useEffect(() => {
    getToken();
  }, [isSignedIn]);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@token');
      setIsSignedIn(token != null ? true : false);
    } catch (e) {
      console.log({e});
    }
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          // backgroundColor: 'white',
        },
      }}>
      {!isSignedIn ? (
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{title: 'Movies Home', headerShown: true}}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{title: 'Details'}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
