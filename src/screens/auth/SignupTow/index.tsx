import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomeInfo from '../../../components/CustomInfo'
import CustomeInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton'
import { Strings } from '../../../shared/strings'
import styles from './style'
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes} from '../../../shared/NavigationRoutes';

const SignupTow = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View>
      <View style={styles.TopCircule}></View>
      <Text style={styles.txt}>Create Account</Text>
      <Text style={styles.subTxt}>Step 2 of 3</Text>
    </View>
    <View style={styles.info}>
    <CustomeInfo label="Enter Your Contact Information" />
    </View>
    <View style={styles.inputContainer}>
      <CustomeInput
        label={Strings.email}
        placeholder={Strings.enterEmail}
      />
      <CustomeInput
        label={Strings.phone}
        placeholder={Strings.enterphone}
      />
      <CustomeInput
        label={Strings.address}
        placeholder={Strings.enteraddress}
      />
    </View>
    <View style={styles.btnStyle}>
      <CustomButton label="Next" onPress={()=>navigation.navigate(NavigationRoutes.signupthree)}/>
    </View>
  </View>
  )
}

export default SignupTow

