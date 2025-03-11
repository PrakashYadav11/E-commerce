import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    alignSelf: 'center',
    alignContent: 'flex-start',
    marginTop:20,
  },
  label: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#333',
    left: 6,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 11,
    marginTop: 10,
  },
  input: {
    fontSize: width * 0.036,
    color: 'black',
    paddingVertical: 6,
    left:8,
  },
});

export default styles;
