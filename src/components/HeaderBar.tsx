import React, { useContext } from 'react';
import {StyleSheet} from 'react-native';
import {Header, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthCotext/AuthContext';

interface Props {
  handleKeyPress: (text: string) => void;
  triggerQuery: any;
  handleLogOut: () => void;
}

export const HeaderBar = ({handleKeyPress, triggerQuery, handleLogOut}: Props) => {

  return (
    <Header
      backgroundColor={Colors.primayColor}
      containerStyle={styles.containerStyle}
      rightComponent={ 
        <Icon
          name="log-out-outline"
          onPress={() => handleLogOut()}
          size={35}
          color={Colors.danger}
          
        />
      }
      rightContainerStyle={styles.leftContainerStyle}
      centerComponent={
        <Input
          placeholder="Search a movie"
          placeholderTextColor="white"
          selectionColor="yellowgreen"
          onSubmitEditing={triggerQuery}
          returnKeyLabel="Buscar"
          returnKeyType="search"
          containerStyle={styles.inputContainerStyle}
          inputContainerStyle={{ borderBottomColor: 'transparent'}}
          rightIcon={
            <Icon
              name="search"
              backgroundColor={Colors.accentColor}
              onPress={() => triggerQuery()}
              size={30}
              color={Colors.accentColor}
              iconStyle={styles.iconStyle}
            />
          }
          onChangeText={value => handleKeyPress(value)}
          inputStyle={styles.inputStyle}
          autoCompleteType={undefined}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 5,
  },
  homeText: {
    color: Colors.accentColor,
    fontSize: 20,
  },
  leftContainerStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainerStyle: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    
  },
  iconStyle: {
    borderRadius: 30,

  },
  inputStyle: {
    color: Colors.accentColor,
    borderBottomColor: 'white',
    borderWidth: 1,
  },
});
