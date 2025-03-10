import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      marginBottom: 60,
    },
    search: {
      marginTop: height * 0.02,
    },
    border: {
      height: height * 0.004,
      width: width,
      backgroundColor: '#D9D9D9',
      marginTop: height * 0.03,
      marginBottom: height * 0.015,
    },
    headerTxt: {
      fontSize: width * 0.05,
      fontFamily: 'Roboto',
      fontWeight: '900',
      color: 'black',
      margin: width * 0.005,
      left: 10,
    },
    txt: {
      fontSize: width * 0.05,
      fontFamily: 'Roboto',
      fontWeight: '900',
      color: 'black',
      marginTop: height * 0.015,
      justifyContent: 'flex-start',
      left: width * 0.02,
    },
    boxStl: {
      flexDirection: 'row',
      marginTop: height * 0.012,
      justifyContent: 'center',
    },
    box: {
      width: width * 0.41,
      height: height * 0.1,
      borderRadius: 9,
      backgroundColor: '#D9D9D9',
      marginRight: width * 0.01,
      padding: width * 0.03,
    },
    box2: {
      width: width * 0.45,
      height: height * 0.1,
      borderRadius: 9,
      backgroundColor: '#D9D9D9',
      marginLeft: width * 0.012,
    },
    num: {
      fontSize: width * 0.05,
      fontFamily: 'Roboto',
      fontWeight: '900',
      color: 'black',
    },
    sales: {
      fontSize: width * 0.035,
      fontFamily: 'Roboto',
      fontWeight: '900',
    },
    Icon: {
      marginLeft: width * 0.025,
      height: height * 0.031,
      width: width * 0.05,
    },
    box3: {
      width: width * 0.43,
      height: height * 0.1,
      borderRadius: 9,
      backgroundColor: '#D9D9D9',
      marginRight: width * 0.01,
      padding: width * 0.02,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box4: {
      width: width * 0.43,
      height: height * 0.1,
      borderRadius: 9,
      backgroundColor: '#D9D9D9',
      marginLeft: width * 0.012,
      alignItems: 'center',
      justifyContent: 'center',
    },
    varify: {
      height: height * 0.03,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      paddingHorizontal: width * 0.07,
      top: height * 0.005,
    },
    varification: {
      fontFamily: 'Roboto',
      fontWeight: '900',
      color: 'black',
    },
  });
  

  export default styles