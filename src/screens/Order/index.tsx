import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomSearchBar from '../../components/CustomSearchBar';
import CustomeInfo from '../../components/CustomInfo';
import CustomeOrder from '../../components/CustomeOrder';
import {orderData} from '../../dummyData/orderData';
import styles from './style';

const Order = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <CustomSearchBar
          showBackButton={true}
          showNotificationIcon={false}
          onPress={undefined}
          showSearchBar={true}
        />
      </View>
      <ScrollView>
        <View style={styles.info}>
          <CustomeInfo label={'Order List'} />
        </View>

        <View style={styles.orderList}>
          <FlatList
            data={orderData}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <CustomeOrder
                name={item.name}
                orderId={item.orderId}
                orderQuentity={item.orderQuentity}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Order;
