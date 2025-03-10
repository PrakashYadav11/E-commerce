import { StyleSheet, Text, TextInput, View, Dimensions, ViewStyle } from 'react-native';
import React from 'react';
import styles from './style';

interface inputTypes{
  label:string;
  placeholder:string
  secureTextEntry?:boolean

inputStyle?:ViewStyle
}

const CustomeInput = ({ label, placeholder, secureTextEntry,inputStyle }:inputTypes) => {
  return (
    <View style={[styles.container,inputStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#aaa"
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default CustomeInput;

