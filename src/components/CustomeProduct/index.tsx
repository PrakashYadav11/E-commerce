import {
  Dimensions,
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Images} from '../../assets/Images';
import styles from './style';

interface inputTypes {
  productname: string;
  price: string;
  quantity: string;
  description: string;
  stock: any;
}

const CustomeProduct = ({
  productname,
  price,
  quantity,
  description,
  stock,
}: inputTypes) => {
  return (
    <View style={styles.card}>
      <View style={styles.greyBox}></View>
      <View style={styles.outOfStockContainer}>
        <Image source={stock} style={styles.outOfStockImage} />
      </View>
      <View style={styles.content}>
        <Text style={styles.productName}>{productname}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>{price}</Text>
        </View>
        <Text style={styles.weight}>{quantity}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default CustomeProduct;
