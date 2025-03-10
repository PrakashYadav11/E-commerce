import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Dimensions } from 'react-native';
import Home from '../screens/Home';
import Order from '../screens/Order';
import Product from '../screens/Product';
import Profile from '../screens/Profile';
import { Images } from '../assets/Images';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window'); 
const iconSize = width * 0.07; 

const BootamTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false ,tabBarHideOnKeyboard: true}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
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
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({ color }) => (
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
          tabBarIcon: ({ color }) => (
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
          tabBarIcon: ({ color }) => (
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
    </Tab.Navigator>
  );
};

export default BootamTabNavigation;
