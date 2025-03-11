import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../Utils/ResponsiveDimensions';
import Colors from '../../shared/theme/colors';

export const style = StyleSheet.create({
  container: {
    paddingVertical: heightPixel(20),
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
    fontSize:24,
    fontWeight:'700',
    fontFamily:'Inter',
    color:Colors.white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
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
});
