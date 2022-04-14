import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

export const UIInput = Props => (
  <View style={styles.textFields}>
    <Input
      {...Props}
      placeholderTextColor="#BDBDBD"
      inputStyle={styles.inputStyle}
    />
  </View>
);

const styles = StyleSheet.create({
  textFields: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
    height: 75,
    borderRadius: 25,
    margin: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  inputStyle: {
    color: 'black',
    marginLeft: 5,
  },
});
