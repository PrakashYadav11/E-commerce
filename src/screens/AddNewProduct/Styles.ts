import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../shared/theme/colors';
import {heightPixel, widthPixel} from '../../Utils/ResponsiveDimensions';

const {width, height} = Dimensions.get('window');
const scaleFont = (size: any) => size * (width / 375);
const scaleSize = (size: any) => size * (width / 375);

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: widthPixel(12),
  },
  headerStyle: {
    flexDirection: 'row',
  },
  hederTxt: {
    alignSelf: 'center',
    marginLeft: width * 0.2,
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 22,
  },
  containe: {
    alignItems: 'flex-start',
    marginTop: 20,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: heightPixel(10),
    borderRadius: 5,
    borderWidth: 1,
  },
  uploadText: {
    fontSize: 16,
    marginRight: widthPixel(5),
    color: 'black',
  },
  plus: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  imageStyle: {
    height: heightPixel(90),
    width: widthPixel(90),
    borderWidth: 1,
    marginTop: heightPixel(20),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:widthPixel(15),
  },
  plus2:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    bottom:heightPixel(10),
  },
  inputTxt: {
    height: heightPixel(61),
    width: widthPixel(393),
    borderWidth: 1,
    borderColor: '#878787',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: widthPixel(10),
    marginTop: heightPixel(20),
  },
  text: {
    top: heightPixel(10),
    left: widthPixel(5),
  },
  categorytext: {
    bottom: heightPixel(5),
  },
  dropdown: {
    height: 20,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  box: {
    height: heightPixel(300),
    width: '100%',
    alignItems: 'center',
  },
  btnStyle: {
    width: widthPixel(395),
    height: heightPixel(56),
    backgroundColor: Colors.black,
    marginTop: heightPixel(120),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10
  },
  btnTxt:{
    fontSize:19,
    fontWeight:'700',
    fontFamily:'Inter',
    color:Colors.white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  modalBox: {
    height: 328,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  successIcon: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  successText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  iconWrapper: {
    width: scaleSize(80),
    height: scaleSize(80),
    borderRadius: scaleSize(40),
    borderWidth: 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: scaleSize(20),
  },
});
