import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from './Styles';
import CustomSearchBar from '../../components/CustomSearchBar';
import {NavigationRoutes} from '../../shared/NavigationRoutes';
import {Strings} from '../../shared/strings';
import {launchImageLibrary} from 'react-native-image-picker';
import {Images} from '../../assets/Images';
import {CustomInputTxt} from '../../components/CustomInputText/customInputTxt';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../shared/theme/colors';
import {Dropdown} from 'react-native-element-dropdown';

const NewProduct = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [category, setCategory] = useState(null);
  const categories = [
    {label: 'Electronics', value: 'electronics'},
    {label: 'Clothes', value: 'clothes'},
    {label: 'Furniture', value: 'furniture'},
    {label: 'Toys', value: 'toys'},
  ];

  // Auto-close modal & navigate after 10 sec
  useEffect(() => {
    if (modalVisible) {
      const timer = setTimeout(() => {
        setModalVisible(false);
        navigation.navigate(NavigationRoutes.bottom);
      }, 1000); // 10 seconds delay

      return () => clearTimeout(timer); // Clear timer if component unmounts
    }
  }, [modalVisible, navigation]);
  return (
    <View style={style.container}>
      <View style={style.headerStyle}>
        <CustomSearchBar
          showBackButton={true}
          showNotificationIcon={false}
          showSearchBar={false}
          onPress={() => navigation.navigate(NavigationRoutes.home)}
        />
        <Text style={style.hederTxt}>{Strings.AddProduct}</Text>
      </View>
      <View style={style.containe}>
        <TouchableOpacity style={style.uploadButton}>
          <Text style={style.uploadText}>{Strings.UploadProductImage}</Text>
          <Text style={style.plus}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={style.headerStyle}>
        <View style={style.imageStyle}>
          <View style={style.headerStyle}>
            <Image source={Images.gallery} />
            <Text style={style.plus2}>+</Text>
          </View>
        </View>
        <View style={style.imageStyle}>
          <View style={style.headerStyle}>
            <Image source={Images.gallery} />
            <Text style={style.plus2}>+</Text>
          </View>
        </View>
        <View style={style.imageStyle}>
          <View style={style.headerStyle}>
            <Image source={Images.gallery} />
            <Text style={style.plus2}>+</Text>
          </View>
        </View>
      </View>
      <CustomInputTxt />
      {/* <View style={style.inputTxt}>
        <Text style={style.categorytext}>Category</Text>
        <Dropdown
          style={style.dropdown}
          data={categories}
          labelField="label"
          valueField="value"
          placeholder="Select Category"
          placeholderStyle={{color: Colors.black}}
          value={category}
          onChange={item => setCategory(item.value)}
        />
      </View> */}
      <View style={style.box}>
        <TouchableOpacity
          style={style.btnStyle}
          onPress={() => setModalVisible(true)}>
          <Text style={style.btnTxt}>{Strings.Add_Product}</Text>
        </TouchableOpacity>
      </View>

      {/* Success Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={style.modalContainer}>
          <View style={style.modalBox}>
            <View style={style.iconWrapper}>
              <Icon name="check" size={40} color="black" />
            </View>
            <Text style={style.successText}>Product Added Successfully</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NewProduct;
