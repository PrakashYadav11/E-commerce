import { Dimensions, StyleSheet, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const baseWidth = 375;
const baseHeight = 812;

const scale = width / baseWidth;
const verticalScale = height / baseHeight;

const normalize = (size: number) => Math.round(PixelRatio.roundToNearestPixel(size * scale));
const vNormalize = (size: number) => Math.round(PixelRatio.roundToNearestPixel(size * verticalScale));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TopCircule: {
    height: vNormalize(130),
    backgroundColor: '#D9D9D9',
    width: '100%',
    borderBottomRightRadius: normalize(60),
    borderBottomLeftRadius: normalize(60),
  },
  subTxt: {
    bottom: vNormalize(63),
    fontSize: normalize(12),
    left: normalize(24),
    fontWeight: 'bold',
    color: 'black',
  },
  info: {
    top: vNormalize(0),
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: vNormalize(70),
  },
  txt: {
    position: 'absolute',
    color: 'black',
    fontSize: normalize(28),
    top: vNormalize(20),
    left: normalize(20),
    fontFamily: 'Roboto',
    fontWeight: '900',
    fontStyle: 'normal',
  },
  btnStyle: {
    top: vNormalize(240),
    alignItems: 'center',
  },
  textview: {
    alignItems: 'center',
    justifyContent: 'center',
    top: vNormalize(290),
  },
  textStyle: {
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: normalize(13),
  },
});

export default styles;
