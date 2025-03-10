import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomSearchBar from '../../components/CustomSearchBar';
import { Images } from '../../assets/Images';
import styles from './style';


const Profile = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  // Menu data
  const menuItems = [
    { label: 'Customer Feedback', icon: Images.feedback },
    { label: 'Help Center', icon: Images.help },
    { label: 'Settings', icon: Images.setting },
    { label: 'Live Chat', icon: Images.live },
    {
      label: 'Log Out',
      icon: Images.logout,
      action: () => setModalVisible(true),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <CustomSearchBar
          showBackButton={true}
          showNotificationIcon={false}
          onPress={undefined}
          showSearchBar={false}
        />
        <Text style={styles.profileTxt}>Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <Image source={Images.profilePhoto} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Christopher Parker</Text>
          <Text style={styles.userPhone}>+91 4653031956</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu List Section */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={item.action ? item.action : undefined} 
          >
            <Image source={item.icon} style={styles.menuIcon} />
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to log out?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonNo}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonYes}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('Login'); 
                }}
              >
                <Text style={styles.buttonTxt}>Yes, Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;



