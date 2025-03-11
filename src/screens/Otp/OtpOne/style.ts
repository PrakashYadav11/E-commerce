import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    scrollContainer: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingHorizontal: width * 0.05,
      marginTop:height * 0.11,
    },
    headerContainer: {
      width: '100%',
      marginBottom: height * 0.06,
      paddingLeft: width * 0.05, 
    },
    title: {
      fontSize: width * 0.07,
      fontWeight: '800',
      color: 'black',
      marginBottom: height * 0.009,
      letterSpacing: 0.5,
      textAlign: 'left',
    },
    subtitle: {
      fontSize: width * 0.04,
      color: '#A0A0A0',
      textAlign: 'left',
      lineHeight: height * 0.025,
    },
    otpWrapper: {
      marginBottom: height * 0.02,
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
    },
    otpBoxContainer: {
      width: width * 0.14,
      height: width * 0.14,
      backgroundColor: 'white',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#E0E0E0',
    },
    otpBox: {
      fontSize: width * 0.06,
      color: 'black',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#F4F4F4',
      width: '85%',
      paddingVertical: height * 0.02,
      borderRadius: 30, 
      alignItems: 'center',
      marginVertical: height * 0.02,
    },
    buttonText: {
      color: 'black',
      fontSize: width * 0.045,
      fontWeight: 'bold',
    },
    resendText: {
      fontSize: width * 0.038,
      color: 'gray',
      textAlign: 'center',
    },
    resendButton: {
      color: 'black',
      fontWeight: 'bold',
    },
  });
  
  export default styles