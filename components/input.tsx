import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '@/constants/themes'
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Input = ({name, value, placeholder, keyboardType, autoCapitalize, textContentType, ...otherProps}) => {
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        textContentType={textContentType}
        {...otherProps}
      />
    </View>
  )
};

export default Input

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.form,
    width: '100%',
    height: 45,
    padding: 12,
    borderRadius: 10,
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    width: '80%',
  },
});