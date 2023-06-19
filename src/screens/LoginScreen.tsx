/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Keyboard,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import loginApi from '../api/loginApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useForm } from '../hooks/useForm';
import { Box, Button, TextInput } from '@react-native-material/core';
import { AuthContext } from '../context/AuthCotext/AuthContext';

interface Props extends StackScreenProps<any, any> { }

const LoginScreen = ({ navigation }: Props) => {
  const { email, password, onChange } = useForm({
    email: '',
    password: '',
  });

  const { setAuthenticated } = useContext(AuthContext);

  const Login = async () => {
    try {
      const resp = await loginApi.post('/login', {
        email,
        password,
      });
      await AsyncStorage.setItem('@token', resp.data.token);
      setAuthenticated()
      // navigation.navigate('HomeScreen');
    } catch (error) {
      Alert.alert('Error', 'Please check the email or password');
    }
  };
  const onLogin = () => {
    Keyboard.dismiss();
    Login();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.screen}>
          <Box 
            w={'100%'} 
            h={200} 
            m={0} 
            style={{ 
            position: 'absolute', 
            backgroundColor: "purple",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50
            }} />
          
          <Image
            style={styles.logoImage}
            source={require('../assets/logo.png')}
          />
          <Text
            style={{
              marginBottom: '10%',
              color: 'black',
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            Movies App
          </Text>

          <TextInput
            variant="outlined"
            label="Email"
            style={{
              marginBottom: 5,
              width: '75%',
            }}
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
            onChangeText={value => onChange(value, 'email')}
            returnKeyType="next"
            value={email}
          />

          {/* <UIInput
            placeholder="Email"
            leftIconName="email"
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
            onChangeText={value => onChange(value, 'email')}
            returnKeyType="next"
            value={email}
          /> */}

          <TextInput
            variant="outlined"
            label="Password"
            style={{
              // margin: 16,
              width: '75%',
            }}
            secureTextEntry={true}
            onChangeText={value => onChange(value, 'password')}
            returnKeyType="next"
            value={password}
          />

          {/* <UIInput
            placeholder="Password"
            secureTextEntry={true}
            leftIconName="lock"
            onChangeText={value => onChange(value, 'password')}
            value={password}
          /> */}

          {/* <UIButton
            title="LOGIN"
            btnColor="black"
            type="solid"
            onPress={() => onLogin()}
          /> */}
          <Button
            title="Login"
            color="on-secondary"
            style={{
              width: '75%',
              marginTop: 75,
              height: 50,
              justifyContent: 'center',
              zIndex: 2
              
            }}
            onPress={() => onLogin()}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    // backgroundColor: '#E0E0E0',
    backgroundColor: 'white',
    paddingTop: '20%',
    flex: 1,
    alignItems: 'center',
  },

  logoImage: {
    margin: '5%',
    marginTop: 70,
    marginBottom: '2%',
    width: 100,
    height: 100,
    borderRadius: 20,
  },

  buttonStyle: {
    borderRadius: 50,
    height: 75,
    padding: 23,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 20,
  },

  createAnAccountStyle: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 30,
    height: 50,
  },
});
