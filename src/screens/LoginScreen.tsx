/* eslint-disable react-native/no-inline-styles */
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
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

import {UIButton} from '../components/Buttons';
import {UIInput} from '../components/Input';
import {useForm} from '../hooks/useForm';
import {Button, TextInput} from '@react-native-material/core';

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({navigation}: Props) => {
  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    AsyncStorage.getItem('@token')
      .then(token => {
        if (token) navigation.replace('HomeScreen');
      })
      .catch(err => {
        err;
      });
  }, []);

  const Login = async () => {
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
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
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
              marginTop: 30,
              height: 50,
              justifyContent: 'center',
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
