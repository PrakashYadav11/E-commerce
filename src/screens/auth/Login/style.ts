import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: width * 0.05, 
      },
      btmBtn: {
        top: height * 0.13,
      },
      btnStyle: {
        backgroundColor: '#F4F4F4',
        borderRadius: width * 0.04, 
        borderWidth: 1,
        borderColor: '#CFCFCF',
        paddingVertical: height * 0.018, 
        paddingHorizontal: width * 0.08,
        alignItems: 'center',
        justifyContent: 'center',
      },
      btnText: {
        color: 'black',
        fontSize: width * 0.04, 
        fontFamily: 'Roboto',
        fontWeight: '900',
      },
      img: {
        height: height * 0.04, 
        width: width * 0.052,
        marginRight: width * 0.015,
        tintColor: 'black',
      },
      desLine: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        top: height * 0.1,
      },
      des: {
        height: 1,
        width: '26%',
        backgroundColor: 'black',
      },
      desText: {
        fontSize: width * 0.025, 
      },
      acc: {
        top: height * 0.015,
      },
      accTxt: {
        color: 'black',
        fontSize: width * 0.025,
        fontWeight: '800',
      },
      btn: {
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        width: '55%',
        height: height * 0.05,
        borderRadius: width * 0.03,
        justifyContent: 'center',
      },
      txt: {
        fontSize: width * 0.05,
        fontWeight: '800',
        color: 'black',
      },
      forgotPass: {
        fontSize: width * 0.025,
        alignSelf: 'flex-end',
        bottom: height * 0.012,
      },
      btnContainer: {
        alignItems: 'center',
        top: height * 0.02,
      },
      headerText: {
        bottom: height * 0.1,
        fontSize: width * 0.08,
        color: 'black',
        fontWeight: '900',
      },
      circule: {
        width: width * 0.8,
        height: height * 0.35,
        borderRadius: (width * 0.8) / 2,
        opacity: 0.2,
        backgroundColor: '#D9D9D9',
        position: 'absolute',
        top: height * 0.8,
        left: width * 0.6,
      },
      secondCircule: {
        width: width * 2,
        height: height * 0.5,
        opacity: 0.2,
        backgroundColor: '#D9D9D9',
        position: 'absolute',
        left: width * 0.7,
        borderTopLeftRadius: width * 2,
        borderBottomLeftRadius: width * 2,
        top: height * 0.1,
      },
      thirdCircule: {
        width: width * 3,
        height: height * 1,
        opacity: 0.2,
        backgroundColor: '#D9D9D9',
        position: 'absolute',
        borderTopRightRadius: width * 2.5,
        borderBottomRightRadius: width * 2.5,
        right: width * 0.7,
        top: height * 0.3,
      },
      text: {
        color: 'black',
        marginTop: height * 0.08,
        marginLeft: width * 0.1,
      },
      Box: {
        borderWidth: 1,
        height: height * 0.5,
        width: width * 0.9,
        backgroundColor: '#FFF',
        borderRadius: width * 0.04,
        justifyContent: 'center',
        alignItems: 'center',
      },
  });


  export default styles
  