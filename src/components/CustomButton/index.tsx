import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes} from '../../shared/NavigationRoutes';

interface inputTypes {
  label: string;
  onPress: any;
}

const CustomButton = ({label, onPress}: inputTypes) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={onPress}
        >
        <Text style={styles.btnText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
