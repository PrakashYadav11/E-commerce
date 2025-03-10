import { Dimensions, PixelRatio, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
const scale = width / 375; // Base width for scaling
const verticalScale = height / 812; // Base height for scaling

const normalize = (size: number) => Math.round(PixelRatio.roundToNearestPixel(size * scale));
const vNormalize = (size: number) => Math.round(PixelRatio.roundToNearestPixel(size * verticalScale));

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row', 
        backgroundColor: '#fff',
        borderRadius: normalize(12),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: vNormalize(2) },
        shadowOpacity: 0.1,
        shadowRadius: normalize(4),
        elevation: 3,
        margin: normalize(16),
        overflow: 'hidden',
        padding: normalize(12),
      },
      greyBox: {
        backgroundColor: '#e0e0e0',
        width: normalize(100),
        height: normalize(90),
        borderRadius: normalize(8),
        marginRight: normalize(12),
        position: 'relative',
      },
      outOfStockContainer: {
        position: 'absolute',
        bottom: 10,
        left: normalize(15),
        right: 0,
        justifyContent: 'center',
      },
      outOfStockImage: {
        height: vNormalize(50),
        width: normalize(97),
        resizeMode: 'contain',
      },
      content: {
        flex: 1,
        justifyContent: 'center',
      },
      productName: {
        fontSize: normalize(18),
        fontWeight: 'bold',
        marginBottom: vNormalize(6),
      },
      priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: vNormalize(6),
      },
      discountedPrice: {
        fontSize: normalize(16),
        fontWeight: 'bold',
        color: '#000',
        marginRight: normalize(8),
      },
      originalPrice: {
        fontSize: normalize(14),
        color: '#888',
        textDecorationLine: 'line-through',
      },
      weight: {
        fontSize: normalize(14),
        color: '#555',
        marginBottom: vNormalize(6),
      },
      description: {
        fontSize: normalize(12),
        color: '#666',
      },
});

export default styles