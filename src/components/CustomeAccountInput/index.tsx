import {Text, TextInput, View, ViewStyle} from 'react-native';
import React from 'react';
import styles from './style';

interface inputTypes {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

const CustomeAccountInput = ({
  label,
  placeholder,
  secureTextEntry,
}: inputTypes) => {
  return (
    <View style={styles.container}>
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

export default CustomeAccountInput;
