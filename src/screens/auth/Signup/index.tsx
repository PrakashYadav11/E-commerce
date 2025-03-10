import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomeInfo from '../../../components/CustomInfo';
import CustomeInput from '../../../components/CustomInput/CustomInput';
import {Strings} from '../../../shared/strings';
import CustomButton from '../../../components/CustomButton';
import styles  from './style';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes} from '../../../shared/NavigationRoutes';


const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
      <View style={styles.TopCircule}></View>
      <Text style={styles.txt}>Create Account</Text>
      <Text style={styles.subTxt}>Step 1 of 3</Text>
    </View>
      <View style={styles.info}>
      <CustomeInfo label="Enter Your Business Information" />
      </View>
      <View style={styles.inputContainer}>
        <CustomeInput
          label={Strings.fullName}
          placeholder={Strings.enterfullName}
        />
        <CustomeInput
          label={Strings.businessName}
          placeholder={Strings.enterBusiness}
        />
        <CustomeInput
          label={Strings.product}
          placeholder={Strings.enterProduct}
        />
      </View>
      <View style={styles.btnStyle}>
        <CustomButton label="Next" onPress={()=>navigation.navigate(NavigationRoutes.signuptow)}/>
      </View>
      <View style={styles.textview}>
        <TouchableOpacity onPress={()=>{ navigation.replace(NavigationRoutes.login)}}>
          <Text style={styles.textStyle}>
            Already have an account? Login Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;


