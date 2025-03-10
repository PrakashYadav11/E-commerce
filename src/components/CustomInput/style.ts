import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.8, 
    alignSelf: 'center', 
    marginBottom: 15,
    alignContent:'flex-start',
  },
  label: {
    fontSize: width * 0.04, 
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
  input: {
    fontSize: width * 0.045, 
    color: '#333',
    paddingVertical: 6,
  },
});

export default styles;