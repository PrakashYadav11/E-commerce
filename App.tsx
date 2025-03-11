import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';
import CustomeAccountInput from './src/components/CustomeAccountInput';


function App(): React.JSX.Element {
  return (
    <>
    <MainNavigation /> 
    </>
  );
}

const styles = StyleSheet.create({});

export default App;