import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomeInfo from '../../../components/CustomInfo';
import { Images } from '../../../assets/Images';
import { Image } from 'react-native';
import CustomCheckbox from '../../../components/CustomCheckbox';
import CustomButton from '../../../components/CustomButton';
import { NavigationRoutes } from '../../../shared/NavigationRoutes';
import styles from './style';



const SignupThree = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.TopCircule}></View>
        <Text style={styles.txt}>Create Account</Text>
        <Text style={styles.subTxt}>Step 3 of 3</Text>
      </View>
      <CustomeInfo label={'Upload Valid Identification Document'}/>
      <View>
        <View style={styles.imageContainer}>
            <Image source={Images.upload} style={styles.image}/>
        </View>
        <TouchableOpacity style={styles.uploadfBtn}>
            <Text style={styles.btnTxt}>Upload</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ckeckBox}>
        <CustomCheckbox/>
      </View>
      <CustomButton label={'Finish Sign Up'} onPress={()=>navigation.navigate(NavigationRoutes.signupsuccess)}/>
    </View>
  );
};

export default SignupThree;