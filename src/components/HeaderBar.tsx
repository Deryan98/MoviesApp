import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

interface Props {
  handleKeyPress: (text: string) => void;
  triggerQuery: any;
  query: string;
}

export const HeaderBar = ({handleKeyPress, triggerQuery}: Props) => {
  return (
    <Header
      backgroundColor={Colors.primayColor}
      containerStyle={styles.containerStyle}
      leftComponent={<Text style={styles.homeText}>Home</Text>}
      leftContainerStyle={styles.leftContainerStyle}
      centerComponent={
        <Input
          placeholder="Buscar"
          placeholderTextColor="a"
          selectionColor="yellowgreen"
          onSubmitEditing={triggerQuery}
          returnKeyLabel="Buscar"
          returnKeyType="search"
          containerStyle={styles.inputContainerStyle}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconStyle: {
    borderRadius: 30,
  },
  inputStyle: {
    color: Colors.accentColor,
  },
});
