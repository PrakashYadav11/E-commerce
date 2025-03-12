import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Keyboard,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {productData} from '../../dummyData/productData';
import CustomeProduct from '../../components/CustomeProduct';
import {Images} from '../../assets/Images';
import styles from './style';
import CustomSearchBar from '../../components/CustomSearchBar';
import {NavigationRoutes} from '../../shared/NavigationRoutes';
import { Strings } from '../../shared/strings';

const Home = ({navigation}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <CustomSearchBar
          showBackButton={false}
          showNotificationIcon={true}
          showSearchBar={true}
        />
      </View>

      <ScrollView 
        keyboardShouldPersistTaps="handled" 
        contentContainerStyle={{ paddingBottom: 100 }} // Prevents content from getting cut off
      >
        {!isKeyboardVisible ? (
          <>
            <Text style={styles.txt}>Overview</Text>
            <View style={styles.boxStl}>
              <TouchableOpacity>
                <View style={styles.box}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.num}>40</Text>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      style={{color: 'black'}}
                    />
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.sales}>Total Sales</Text>
                    <Image source={Images.deskOne} style={styles.Icon} />
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.box2}>
                  <View style={styles.box}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={styles.num}>18</Text>
                      <AntDesign
                        name="arrowright"
                        size={20}
                        style={{color: 'black'}}
                      />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.sales}>Earning Report</Text>
                      <Image source={Images.deskTow} style={styles.Icon} />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.boxStl}>
              <View style={styles.box3}>
                <Text style={{fontWeight: '900', color: 'black'}}>
                  Account Status
                </Text>
                <View style={styles.varify}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.varification}>Verified</Text>
                    <MaterialIcons
                      name="verified"
                      size={16}
                      style={{top: 1, marginLeft: 5}}
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.box4}
                onPress={() =>
                  navigation.navigate(NavigationRoutes.NewProduct)
                }>
                <AntDesign name="plus" size={24} style={{color: 'black'}} />
                <Text style={styles.varification}>Add New Products</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.border}></View>
            <Text style={styles.headerTxt}>Product Request</Text>

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
          </>
        ) : (
          <View style={styles.containe}>
            <View style={styles.totalProduct}>
              <View style={styles.resultBox}>
                <View>
                  <Text style={styles.tx}>{Strings.SearchResults}</Text>
                  <Text>{Strings.TotalProductAvailable}</Text>
                </View>
                <TouchableOpacity style={styles.filter}>
                  <Image source={Images.filter} />
                  <Text style={styles.filterTxt}>{Strings.Filters}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <FlatList
              data={productData}
              keyExtractor={item => item.id}
              keyboardShouldPersistTaps="handled"
              renderItem={({item}) => (
                <CustomeProduct
                  productname={item.name}
                  price={`₹${item.discountPrice}`}
                  quantity={item.quantity}
                  description={item.description}
                  stock={item.imageOutOfStock}
                />
              )}
              onScrollBeginDrag={Keyboard.dismiss} // Hide keyboard when scrolling
            />
          </View>
        )}
      </ScrollView>

      {/* Sticky Cart & Checkout Buttons */}
      {isKeyboardVisible && (
        <View style={styles.stickyButtons}>
          <TouchableOpacity style={styles.cartbtn}>
            <AntDesign name="shoppingcart" size={25} style={styles.cartIcon} />
            <Text style={styles.cartTxt}>{Strings.ViewCart}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chackOutbtn}>
            <Text style={styles.chackOuttext}>{Strings.ChackOut}</Text>
            <MaterialCommunityIcons
              name="arrow-collapse-right"
              size={25}
              style={styles.chackOuticon}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Home;
