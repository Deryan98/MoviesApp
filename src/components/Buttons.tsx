/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

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
        color: 'white',
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
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: 'white',
  },
});
