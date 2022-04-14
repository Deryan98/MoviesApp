/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';

export const UI1Button = ({
  title = 'Enter',
  style = {},
  textStyle = {},
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const UIButton = ({
  title = '',
  btnColor = 'black',
  type = 'solid',
  onPress,
}) => {
  return (
    <Button
      title={title}
      color={btnColor}
      type={type}
      buttonStyle={styles.UIBtnStyle}
      titleStyle={{
        color: 'black',
        fontWeight: 'bold',
        width: '70%',
        height: '100%',
      }}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 0},
    shadowRadius: 20,
  },
  UIBtnStyle: {
    borderRadius: 50,
    height: 75,
    padding: 23,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
});
