import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import OtpInputs from 'react-native-otp-inputs';
import styles from './style';
import { NavigationRoutes } from '../../../shared/NavigationRoutes';

const OtpOne = ({navigation}) => {
  const [otp, setOtp] = useState('');
  const handleOtpChange = code => {
    setOtp(code);
    console.log('Entered OTP:', code);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Verification Code</Text>
          <Text style={styles.subtitle}>
            We have sent the verification{'\n'}
            code to your email address
          </Text>
        </View>

        <View style={styles.otpWrapper}>
          <OtpInputs
            handleChange={handleOtpChange}
            numberOfInputs={4}
            autofillFromClipboard={true}
            style={styles.otpContainer}
            inputStyles={styles.otpBox}
            inputContainerStyles={styles.otpBoxContainer}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(NavigationRoutes.otptow)}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={styles.resendText}>
          Didn't Receive OTP?{' '}
          <Text style={styles.resendButton}>Resend OTP</Text>
        </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OtpOne;
