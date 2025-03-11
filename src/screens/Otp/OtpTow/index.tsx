import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity 
  } from 'react-native';
  import React from 'react';
  import Icon from 'react-native-vector-icons/Feather'; // Import Feather icons
import { NavigationRoutes } from '../../../shared/NavigationRoutes';
import styles from './style';


  const OtpTow = ({navigation}) => {
    return (
      <View style={styles.container}>
        {/* Success Icon */}
        <View style={styles.iconWrapper}>
          <Icon name="check" size={40} color="black"/>
        </View>
  
        {/* Success Message */}
        <Text style={styles.title}>Success!</Text>
        <Text style={styles.subtitle}>
          Congratulations! You have been {'\n'}
          successfully authenticated
        </Text>
  
        {/* Continue Button */}
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(NavigationRoutes.bottom)}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default OtpTow;
  
  