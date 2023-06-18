import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {Movie} from '../interfaces/movieInterface';
import LoginScreen from '../screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import SearchScreen from '../screens/SearchScreen';
import { AuthContext } from '../context/AuthCotext/AuthContext';
import { UserStatus } from '../context/AuthCotext/authReducer';
import { ActivityIndicator } from 'react-native';
import { LoadingScreen } from '../screens/Loading';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
  LoginScreen: undefined;
  SearchScreen: undefined;
  LoadingScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {

  const { authState: {userStatus}, setAuthenticated, setNotAuthenticated } = React.useContext(AuthContext);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  React.useEffect(() => {
    AsyncStorage.getItem('@token')
      .then(token => {
        if (token) {
          console.log('Hay token')
          setAuthenticated()
        } 
        else {
          console.log('No hay token')
          setNotAuthenticated()
        }
      })
      .catch(err => {
        err;
      });
  }, []);


  const renderStack  = (status:UserStatus) => {

    switch (status) {
      case 'not-authenticated':
        return <Stack.Screen name="LoginScreen" component={LoginScreen} />
      case 'authenticated':
        return <>
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
        </>
        
      default:
        return  <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        
    }
    
  }

  

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          // backgroundColor: 'white',
        },
      }}>
        {(() => renderStack(userStatus))()}
      
    </Stack.Navigator>
  );
};
