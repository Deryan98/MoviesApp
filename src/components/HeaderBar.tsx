/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Header, Input, Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

interface Props {
  handleKeyPress: (text: string) => void;
  query: string;
}

export const HeaderBar = ({handleKeyPress, query}: Props) => {
  const navigation = useNavigation();

  return (
    <Header
      backgroundColor={Colors.primayColor}
      containerStyle={{
        marginTop: 5,
      }}
      leftComponent={
        <Text style={{color: Colors.accentColor, fontSize: 20}}>Home</Text>
      }
      leftContainerStyle={{
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
      centerComponent={
        <Input
          placeholder="Buscar"
          placeholderTextColor="a"
          selectionColor="yellowgreen"
          autoFocus={true}
          containerStyle={{
            width: '90%',
            height: 50,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          rightIcon={
            <Icon
              name="search"
              backgroundColor={Colors.accentColor}
              onPress={() => {
                // console.log({query});
                return navigation.push('SearchScreen', query);
              }}
              size={30}
              color={Colors.accentColor}
              iconStyle={{
                borderRadius: 30,
              }}
            />
          }
          onChangeText={value => handleKeyPress(value)}
          inputStyle={{
            color: Colors.accentColor,
          }}
          autoCompleteType={undefined}
        />
      }
    />
  );
};
