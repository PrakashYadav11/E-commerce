import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Dimensions} from 'react-native';
import Home from '../screens/Home';
import Order from '../screens/Order';
import Product from '../screens/Product';
import Profile from '../screens/Profile';
import {Images} from '../assets/Images';
import { NavigationRoutes } from '../shared/NavigationRoutes';
import Search from '../screens/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const {width} = Dimensions.get('window');
const iconSize = width * 0.07;

export const HomeStack = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={NavigationRoutes.home}>
      <Stack.Screen name={NavigationRoutes.home} component={Home}/>
      <Stack.Screen name={NavigationRoutes.Search} component={Search}/>
    </Stack.Navigator>
  )
}


const BootamTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}>
      <Tab.Screen
        name={NavigationRoutes.HomeStack}
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={Images.home}
              style={{
                width: iconSize,
                height: iconSize,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.order}
        component={Order}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={Images.order}
              style={{
                width: 28,
                height: 30,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={Images.product}
              style={{
                width: iconSize,
                height: iconSize,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // tabBarStyle:{display:"none"},
          tabBarIcon: ({color}) => (
            <Image
              source={Images.profile}
              style={{
                width: iconSize,
                height: iconSize,
              }}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name={NavigationRoutes.Search}
        component={Search}
        options={{
          tabBarButton: () => null, // Hides tab button but keeps tab bar
          tabBarStyle: {display: 'flex'}, // Ensure tab bar stays visible
        }}
      /> */}
    </Tab.Navigator>
  );
};


export default BootamTabNavigation;
