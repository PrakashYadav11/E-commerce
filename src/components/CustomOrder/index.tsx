import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Images} from '../../assets/Images';
import styles from './style';

interface inputTypes {
  name: string;
  orderId: string;
  orderQuentity: string;
}

const CustomeOrder = ({name, orderId, orderQuentity}: inputTypes) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <View style={styles.greyBox} />

        <View style={styles.buttonContainer}>
        
             <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.accept}>
                <Text style={styles.buttonText}>Accept ✅</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.reject}>
                <Text style={styles.buttonText}>Reject ❌</Text>
              </TouchableOpacity>
            </View>

        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.customerName}>{name}</Text>
        <Text style={styles.orderId}>Order ID-{orderId}</Text>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Status: </Text>
          <View style={styles.statusBadge}>
            <Image source={Images.shipped} style={styles.statusBadgeText} />
          </View>
        </View>

        <Text style={styles.orderQuantity}>
          Order Quantity: {orderQuentity}
        </Text>

        <TouchableOpacity style={styles.viewDetailsButton}>
          <Image source={Images.viewdetail} style={styles.viewDetailsText} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomeOrder;
