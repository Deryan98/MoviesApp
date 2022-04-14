/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Header, Input} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons';
import Colors from '../constants/Colors';

export const HeaderBar = props => {
  const navigation = useNavigation();

  return (
    <Header
      backgroundColor={Colors.purplePrimayColor}
      containerStyle={{
        marginTop: 5,
      }}
      centerComponent={
        <Input
          placeholder="Buscar"
          placeholderTextColor="yellowgreen"
          selectionColor="yellowgreen"
          autoFocus={true}
          onChangeText={value => props.handleKeyPress(value)}
          rightIcon={
            <Icon
              name="search"
              backgroundColor={Colors.greenAccentColor}
              onPress={() => navigation.navigate('SearchScreen')}
              size={30}
              color={Colors.lightblueAccentColor}
              iconStyle={{
                borderRadius: 30,
              }}
            />
          }
          inputStyle={{
            color: Colors.greenAccentColor,
            width: '100%',
          }}
        />
      }
    />
  );
};
