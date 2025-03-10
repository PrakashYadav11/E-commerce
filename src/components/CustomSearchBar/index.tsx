import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
import {Images} from '../../assets/Images';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes} from '../../shared/NavigationRoutes';

interface inputTypes {
  showBackButton: boolean;
  showNotificationIcon: boolean;
  onPress: any;
  showSearchBar: boolean;
}

const {width, height} = Dimensions.get('window');

const CustomSearchBar = ({
  showBackButton = true,
  showNotificationIcon = true,
  onPress,
  showSearchBar = true,
}: inputTypes) => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={[
          styles.row,
          {
            justifyContent:
              showBackButton && showNotificationIcon
                ? 'space-between'
                : 'center',
          },
        ]}>
        {showBackButton && (
          <TouchableOpacity
            style={styles.iconStl}
            onPress={() => navigation.replace(NavigationRoutes.bottom)}>
            <Image
              source={Images.backbtn}
              style={{height: height * 0.06, borderRadius: 10}}
            />
          </TouchableOpacity>
        )}
        {showSearchBar && (
          <View
            style={[
              styles.serch,
              {
                width:
                  showBackButton && showNotificationIcon
                    ? width * 0.7
                    : width * 0.8,
              },
            ]}>
            <Feather name="search" size={20} style={styles.icon} />
            <TextInput
              style={styles.searchStl}
              placeholder="Search"
              placeholderTextColor="grey"
            />
          </View>
        )}
        {showNotificationIcon && (
          <TouchableOpacity style={styles.notification} onPress={onPress}>
            <Ionicons name="notifications-outline" size={30} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomSearchBar;
