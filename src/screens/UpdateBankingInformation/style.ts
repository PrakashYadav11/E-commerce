import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    marginTop: height * 0.08, 
  },
  text: {
    fontSize: width * 0.025, 
    right: width * 0.1, 
    color: "black",
  },
  lockImg: {
    height: height * 0.02, 
    width: width * 0.03, 
    right: width * 0.11,
  },
  lockText: {
    flexDirection: "row",
    marginTop: height * 0.005,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    width: "100%",
    height: "50%", 
    backgroundColor: "#fff",
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.05,
  },
  circle: {
    width: width * 0.3, 
    height: width * 0.3, 
    borderRadius: (width * 0.3) / 2,
    borderWidth: 5,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  title: {
    fontSize: width * 0.055, 
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  subtitle: {
    fontSize: width * 0.04, 
    textAlign: "center",
    color: "black",
    marginVertical: height * 0.01,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: height * 0.015, 
    paddingHorizontal: width * 0.3, 
    borderRadius: width * 0.03,
    marginTop: height * 0.02,
  },
  buttonText: {
    color: "white",
    fontSize: width * 0.045, 
    fontWeight: "bold",
  },
});

export default styles;
