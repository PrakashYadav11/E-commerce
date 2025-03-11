import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
} from "react-native";
import { style } from "./Style";
import { Strings } from "../../shared/strings";
import Colors from "../../shared/theme/colors";
import { NavigationRoutes } from "../../shared/NavigationRoutes";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";

export const CustomInputTxt = () => { // Pass navigation as prop
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [category, setCategory] = useState(null);
    const categories = [
      {label: 'Electronics', value: 'electronics'},
      {label: 'Clothes', value: 'clothes'},
      {label: 'Furniture', value: 'furniture'},
      {label: 'Toys', value: 'toys'},
    ];
  const navigation = useNavigation()
  

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
      {/* Description */}
      <View style={style.inputTxt}>
        <Text style={style.text}>{Strings.Description}</Text>
        <TextInput
          placeholder={Strings.EnterProductDescription}
          placeholderTextColor={Colors.black}
          value={description}
          onChangeText={setDescription}
        />
      </View>

      {/* Price */}
      <View style={style.inputTxt}>
        <Text style={style.text}>{Strings.Price}</Text>
        <TextInput
          placeholder={Strings.Enter_Product_Price}
          style={style.placeholderStl}
          placeholderTextColor={Colors.black}
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />
      </View>

      {/* Stock */}
      <View style={style.inputTxt}>
        <Text style={style.text}>{Strings.Enter_Stock}</Text>
        <TextInput
          placeholder={Strings.Enter_Product_Quantity}
          style={style.placeholderStl}
          placeholderTextColor={Colors.black}
          keyboardType="numeric"
          value={stock}
          onChangeText={setStock}
        />
      </View>
      <View style={style.inputTxt}>
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
      </View>
    </View>
  );
};

