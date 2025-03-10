import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes} from '../../shared/NavigationRoutes';

const Splash = ({navigation}:any) => {
  // const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(NavigationRoutes.login);
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.txt}>Let's Get Started</Text>
      </View>
    </View>
  );
};

export default Splash;
