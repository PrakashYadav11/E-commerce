import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import Colors from "./colors";
import { heightPixel, pixelSizeHorizontal, pixelSizeVertical } from "../../Utils/ResponsiveDimensions";
import FontSize from "./fontSize";
import Font from "./font";


interface style {
  container: ViewStyle;
  containerBg: ViewStyle;
  marginTop10: ViewStyle;
  marginTop20: ViewStyle;
  marginTop30: ViewStyle;
  marginTop40: ViewStyle;
  marginBottom10: ViewStyle;
  marginBottom20: ViewStyle;
  marginBottom30: ViewStyle;
  marginBottom40: ViewStyle;

  marginVertical30: ViewStyle;
  marginVertical20: ViewStyle;

  marginHorizontal10: ViewStyle;
  marginHorizontal20: ViewStyle;

  padding20: ViewStyle;

  rowCenter: ViewStyle;

  authCard: ViewStyle;
  authHeaderText: TextStyle;

  caption_12_400: TextStyle;
  caption_12_500: TextStyle;
  caption_12_700: TextStyle;
  caption_14_400: TextStyle;
  caption_14_r_400: TextStyle;
  caption_14_500: TextStyle;
  caption_14_700: TextStyle;
  caption_16_400: TextStyle;
  caption_16_700: TextStyle;
  caption_18_700: TextStyle;
  caption_20_700: TextStyle;
  caption_24_700: TextStyle;
}

const globalStyles = StyleSheet.create<style>({
  container: {
    flex: 1,
  },
  containerBg: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  marginTop10: {marginTop: heightPixel(10)},
  marginTop20: {marginTop: heightPixel(20)},
  marginTop30: {marginTop: heightPixel(30)},
  marginTop40: {marginTop: heightPixel(40)},

  marginBottom10: {marginBottom: heightPixel(10)},
  marginBottom20: {marginBottom: heightPixel(20)},
  marginBottom30: {marginBottom: heightPixel(30)},
  marginBottom40: {marginBottom: heightPixel(40)},

  marginVertical30: {marginVertical: pixelSizeVertical(30)},
  marginVertical20: {marginVertical: pixelSizeVertical(20)},

  marginHorizontal10: {marginHorizontal: pixelSizeHorizontal(10)},
  marginHorizontal20: {marginHorizontal: pixelSizeHorizontal(20)},

  padding20: {padding: pixelSizeHorizontal(20)},

  rowCenter: {flexDirection: 'row', alignItems: 'center'},

  authCard: {backgroundColor: Colors.white, borderRadius: 25},
  authHeaderText: {color: Colors.primary_color, marginTop: 10},

  caption_12_400: {
    fontSize: FontSize.font_12,
    fontFamily: Font.roboto_ragular_400,
  },
  caption_12_500: {
    fontSize: FontSize.font_12,
    fontFamily: Font.roboto_medium_500,
  },
  caption_12_700: {
    fontSize: FontSize.font_12,
    fontFamily: Font.roboto_bold_700,
  },
  caption_14_400: {
    fontSize: FontSize.font_14,
    fontFamily: Font.roboto_ragular_italic_400,
  },
  caption_14_r_400: {
    fontSize: FontSize.font_14,
    fontFamily: Font.roboto_ragular_400,
  },
  caption_14_500: {
    fontSize: FontSize.font_14,
    fontFamily: Font.roboto_medium_500,
  },
  caption_14_700: {
    fontSize: FontSize.font_14,
    fontFamily: Font.roboto_bold_700,
  },
  caption_16_400: {
    fontSize: FontSize.font_16,
    fontFamily: Font.roboto_ragular_400,
  },
  caption_16_700: {
    fontSize: FontSize.font_16,
    fontFamily: Font.roboto_bold_700,
  },
  caption_18_700: {
    fontSize: FontSize.font_18,
    fontFamily: Font.roboto_bold_700,
  },
  caption_20_700: {
    fontSize: FontSize.font_20,
    fontFamily: Font.roboto_bold_700,
  },
  caption_24_700: {
    fontSize: FontSize.font_24,
    fontFamily: Font.roboto_bold_700,
  },
});

export default globalStyles;
