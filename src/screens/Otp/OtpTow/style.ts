import { StyleSheet, Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");


const scaleFont = (size) => size * (width / 375);
const scaleSize = (size) => size * (width / 375);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: scaleSize(20),
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
  title: {
    fontSize: scaleFont(22),
    fontWeight: "bold",
    color: "black",
    marginBottom: scaleSize(8),
  },
  subtitle: {
    fontSize: scaleFont(14),
    color: "gray",
    textAlign: "center",
    marginBottom: scaleSize(30),
  },
  button: {
    backgroundColor: "black",
    width: "85%",
    paddingVertical: scaleSize(14),
    borderRadius: scaleSize(30),
    alignItems: "center",
    marginTop: scaleSize(20),
  },
  buttonText: {
    color: "white",
    fontSize: scaleFont(16),
    fontWeight: "bold",
  },
});

export default styles;
