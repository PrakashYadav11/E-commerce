import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../../Utils/ResponsiveDimensions';
import globalStyles from '../../../shared/theme/globalStyles';

const {width, height} = Dimensions.get('window');
const baseWidth = 375;
const baseHeight = 812;

const normalize = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(size * scale));
const vNormalize = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(size * verticalScale));
const scale = width / baseWidth;
const verticalScale = height / baseHeight;

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
  image: {
    height: 50,
    width: 50,
  },
  imageContainer: {
    borderRadius: 13,
    borderWidth: 1,
    width: widthPixel(100),
    height: heightPixel(100),
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPixel(80),
  },
  uploadfBtn: {
    borderRadius: 20,
    height: heightPixel(30),
    backgroundColor: 'black',
    width: widthPixel(100),
    marginLeft: 22,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
  },
  btnTxt: {
    color: 'white',
    fontSize: 11,
  },
  ckeckBox: {
    marginTop: 200,
    left: 18,
  },
});

export default styles;
