import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {productData} from '../../dummyData/productData';
import CustomeProduct from '../../components/CustomeProduct';
import CustomSearchBar from '../../components/CustomSearchBar';
import styles from './style';

const Product = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <CustomSearchBar
          showBackButton={true}
          showNotificationIcon={false}
          onPress={() => {}}
          showSearchBar={true}
        />
      </View>
      <FlatList
        data={productData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CustomeProduct
            productname={item.name}
            price={`₹${item.discountPrice}`}
            quantity={item.quantity}
            description={item.description}
            stock={item.imageOutOfStock}
          />
        )}
      />
    </View>
  );
};

export default Product;
