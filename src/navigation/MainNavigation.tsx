import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationRoutes} from '../shared/NavigationRoutes';
import BootamTabNavigation from './BootamTabNavigation';
import Splash from '../screens/Splash';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import SignupTow from '../screens/auth/SignupTow';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={NavigationRoutes.splash}>
        <Stack.Screen name={NavigationRoutes.splash} component={Splash} />
        <Stack.Screen name={NavigationRoutes.login} component={Login} />
        <Stack.Screen name={NavigationRoutes.signup} component={Signup} />
        <Stack.Screen name={NavigationRoutes.signuptow} component={SignupTow}/>
        <Stack.Screen
          name={NavigationRoutes.bottom}
          component={BootamTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
