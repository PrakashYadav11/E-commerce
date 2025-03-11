import {
  Button,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomeInput from '../../../components/CustomInput/CustomInput';
import {Strings} from '../../../shared/strings';
import {Images} from '../../../assets/Images';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes} from '../../../shared/NavigationRoutes';

const {width, height} = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.circule}></View>
      <View style={styles.secondCircule}></View>
      <View style={styles.thirdCircule}></View>
      <Text style={styles.headerText}>Welcome Back!</Text>
      <View style={styles.Box}>
        <View style={styles.subContainer}>
          <CustomeInput
            label={Strings.email}
            placeholder={Strings.enterEmail}
            inputStyle={{width: width * 0.7}}
          />
          <CustomeInput
            label={Strings.password}
            placeholder={Strings.enterPassword}
            secureTextEntry
            inputStyle={{width: width * 0.7}}
          />
          <TouchableOpacity>
            <Text style={styles.forgotPass}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.replace(NavigationRoutes.bottom);
              }}>
              <Text style={styles.txt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.acc}
              onPress={() => {
                navigation.replace(NavigationRoutes.signup);
              }}>
              <Text style={styles.accTxt}>
                Don't have an account? Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.desLine}>
        <View style={styles.des} />
        <Text style={styles.desText}>Or Continue With</Text>
        <View style={styles.des} />
      </View>

      <View style={styles.btmBtn}>
        <TouchableOpacity style={styles.btnStyle} onPress={()=>navigation.navigate(NavigationRoutes.otpone)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Images.phone} style={styles.img} />
            <Text style={styles.btnText}>Email OTP</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
