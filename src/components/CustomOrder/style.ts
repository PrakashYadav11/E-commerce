import { Dimensions, PixelRatio, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const scale = width / 375; 
const verticalScale = height / 812;

const normalize = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(size * scale));

const normalizeVertical = (size: number) =>
  Math.round(PixelRatio.roundToNearestPixel(size * verticalScale));

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: normalize(12),
    padding: normalize(12),
    margin: normalize(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
  },
  imageContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  greyBox: {
    backgroundColor: "#e0e0e0",
    width: normalize(120),
    height: normalizeVertical(100), 
    borderRadius: normalize(8),
  },
  content: {
    flex: 1,
    justifyContent: "center",
    marginLeft: normalize(10),
  },
  customerName: {
    fontSize: normalize(18),
    fontWeight: "bold",
    color: "black",
  },
  orderId: {
    fontSize: normalize(14),
    color: "#555",
    marginBottom: normalize(4),
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: normalize(6),
  },
  statusText: {
    fontSize: normalize(14),
    color: "#000",
  },
  statusBadge: {
    backgroundColor: "#d9d9d9",
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(4),
    borderRadius: normalize(6),
    flexDirection: "row",
    alignItems: "center",
  },
  statusBadgeText: {
    height: normalizeVertical(15),
    width: normalize(60),
  },
  orderQuantity: {
    fontSize: normalize(14),
    color: "#333",
  },
  viewDetailsButton: {
    backgroundColor: "black",
    paddingVertical: normalize(6),
    borderRadius: normalize(6),
    marginTop: normalize(10),
    alignItems: "center",
    width: "50%",
  },
  viewDetailsText: {
    height: normalizeVertical(17),
    width: normalize(70),
  },
  
  buttonContainer: {
    flexDirection: "row",
    marginTop: normalize(6),
    alignItems: "flex-end", 
  },
  acceptButton: {
    backgroundColor: "black",
    paddingVertical: normalize(7),
    paddingHorizontal: normalize(15),
    borderRadius: normalize(6),
    alignItems: "center",
    marginRight: normalize(6),
  },
  rejectButton: {
    backgroundColor: "black",
    paddingVertical: normalize(7),
    paddingHorizontal: normalize(15),
    borderRadius: normalize(6),
    alignItems: "center",
  },
  acceptText: {
    color: "white",
    height: normalizeVertical(14),
    width: normalize(34),
  },
  rejectText: {
    color: "white",
    height: normalizeVertical(14),
    width: normalize(34),
  },
  accept: {
    backgroundColor: '#000',
    padding:5,
    borderRadius: 5,
    marginRight: 5,
    width:55,
    height:22,
    alignItems:'center',
    justifyContent:'center'
  },
  reject: {
    backgroundColor: '#000',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width:55,
    height:22,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 8     ,
  },

});

export default styles;
