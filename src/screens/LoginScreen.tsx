/* eslint-disable react-native/no-inline-styles */
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Keyboard,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import loginApi from '../api/loginApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {UIButton} from '../components/Buttons';
import {UIInput} from '../components/Input';
import {useForm} from '../hooks/useForm';

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({navigation}: Props) => {
  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    AsyncStorage.getItem('@token')
      .then(token => {
        console.log({token});
        if (token) navigation.navigate('HomeScreen');
      })
      .catch(err => {
        console.log({err});
      });
  }, []);

  //   const checkToken = ()

  const Login = async () => {
    console.log('antes del desastre');
    try {
      const resp = await loginApi.post('/login', {
        email,
        password,
      });
      await AsyncStorage.setItem('@token', resp.data.token);
      navigation.replace('HomeScreen');
    } catch (error) {
      Alert.alert('Error', 'Please check the email or password');
    }
  };
  const onLogin = () => {
    Keyboard.dismiss();
    Login();
    // navigation.replace('HomeScreen');
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.screen}>
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

        <UIInput
          placeholder="Email"
          leftIconName="email"
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={value => onChange(value, 'email')}
        />

        <UIInput
          placeholder="Password"
          secureTextEntry={true}
          leftIconName="lock"
          onChangeText={value => onChange(value, 'password')}
        />

        <UIButton
          title="LOGIN"
          btnColor="black"
          type="solid"
          onPress={() => onLogin()}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#E0E0E0',
    paddingTop: '20%',
    flex: 1,
    alignItems: 'center',
  },

  logoImage: {
    margin: '5%',
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
