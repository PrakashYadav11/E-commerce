import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomeInfo from '../../components/CustomInfo';
import CustomeAccountInput from '../../components/CustomeAccountInput';
import {Strings} from '../../shared/strings';
import CustomButton from '../../components/CustomButton';
import {NavigationRoutes} from '../../shared/NavigationRoutes';
import {Image} from 'react-native';
import {Images} from '../../assets/Images';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';


const UpdateBankingInformation = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <CustomeInfo label={'Update Banking Information'} />
      <View style={styles.inputContainer}>
        <CustomeAccountInput
          label={Strings.accname}
          placeholder={Strings.enteraccname}
        />
        <CustomeAccountInput
          label={Strings.accnum}
          placeholder={Strings.enteraccnum}
        />
        <CustomeAccountInput
          label={Strings.ifsc}
          placeholder={Strings.enterifsc}
        />
        <CustomeAccountInput
          label={Strings.additional}
          placeholder={Strings.enteradditional}
        />
      </View>
      <View
        style={{
          height: 160,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <View>
          <CustomButton
            label={'Save & Update'}
            onPress={() => setModalVisible(true)}
          />
        </View>
        <View style={styles.lockText}>
          <Image source={Images.lock} style={styles.lockImg} />
          <Text style={styles.text}>
            Your Payment Details Are Securely Protected
          </Text>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.circle}>
              <Icon name="check" size={50} color="black" />
            </View>
            <Text style={styles.title}>Awesome! 🚀</Text>
            <Text style={styles.subtitle}>
              Now, let's start your application and bring it to life with
              seamless functionality and a smooth user experience.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate(NavigationRoutes.bottom);
              }}>
              <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UpdateBankingInformation;


