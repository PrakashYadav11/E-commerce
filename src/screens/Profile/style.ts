import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
    marginTop: height * 0.02,
  },
  profileTxt: {
    marginLeft: width * 0.3,
    fontSize: width * 0.05,
    fontWeight: '900',
    color: 'black',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D1D1D1',
    padding: height * 0.02,
    borderRadius: width * 0.03,
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.03,
  },
  profileImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.1,
  },
  userInfo: {
    marginLeft: width * 0.04,
    flex: 1,
  },
  userName: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: 'black',
  },
  userPhone: {
    fontSize: width * 0.04,
    color: 'gray',
    marginTop: height * 0.005,
  },
  editButton: {
    marginTop: height * 0.01,
    backgroundColor: 'black',
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.07,
    borderRadius: width * 0.02,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  // Menu Styling
  menuContainer: {
    marginTop: height * 0.03,
    width: '90%',
    alignSelf: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.015,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1',
  },
  menuIcon: {
    width: width * 0.07,
    height: width * 0.07,
    marginRight: width * 0.04,
  },
  menuText: {
    fontSize: width * 0.045,
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(215, 206, 206, 0.5)',
  },
  modalContent: {
    backgroundColor: '#333333',
    height: height * 0.25,
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    padding: width * 0.05,
    alignItems: 'center',
  },
  modalText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    textAlign: 'center',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonYes: {
    backgroundColor: '#D9D9D9',
    padding: height * 0.015,
    borderRadius: width * 0.03,
    width: '40%',
    alignItems: 'center',
  },
  buttonNo: {
    backgroundColor: '#D9D9D980',
    padding: height * 0.015,
    borderRadius: width * 0.03,
    width: '40%',
    alignItems: 'center',
  },
  buttonTxt: {
    color: 'black',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
});

export default styles;
