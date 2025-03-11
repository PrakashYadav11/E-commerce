import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Images } from '../../../assets/Images';
import CustomButton from '../../../components/CustomButton';
import { NavigationRoutes } from '../../../shared/NavigationRoutes';
import styles from './style';




const SuccessScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.centerContent}>
                <Image source={Images.signupsuccess} style={styles.icon} />
                <Text style={styles.successText}>You Have Successfully{'\n'}Signed Up</Text>
            </View>
            <View style={styles.bottomContent}>
                <Text style={styles.description}>
                    For a seamless payment experience, please update your{'\n'}
                    banking details. This ensures faster transactions, secure{'\n'}
                    processing, and hassle-free payments.
                </Text>

                {/* Button */}
                <CustomButton 
                    label={'Update Your Banking Information'} 
                    onPress={() => navigation.navigate(NavigationRoutes.updatebanking)} 
                />
            </View>
        </View>
    );
};

export default SuccessScreen;


