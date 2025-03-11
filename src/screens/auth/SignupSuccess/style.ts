import { Dimensions, StyleSheet, PixelRatio } from "react-native";

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
        backgroundColor: 'white',
        paddingHorizontal: normalize(20),
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: normalize(110),
        height: normalize(110),
        marginBottom: vNormalize(20),
    },
    successText: {
        fontSize: normalize(18),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: vNormalize(20),
        color: 'black',
    },
    bottomContent: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: vNormalize(30),
    },
    description: {
        fontSize: normalize(12),
        textAlign: 'center',
        color: 'black',
        marginBottom: vNormalize(20),
        width: width * 0.9,
    },
});

export default styles;
