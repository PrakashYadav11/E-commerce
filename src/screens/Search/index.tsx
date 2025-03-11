import {View, Text, TouchableOpacity, Image, FlatList, Keyboard} from 'react-native';
import React, { useState } from 'react';
import {style} from './Style';
import CustomSearchBar from '../../components/CustomSearchBar';
import {Strings} from '../../shared/strings';
import {Images} from '../../assets/Images';
import CustomeProduct from '../../components/CustomeProduct';
import {productData} from '../../dummyData/productData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Search = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <View style={style.container}>
      <View style={style.search}>
        <CustomSearchBar
          showBackButton={false}
          showSearchBar={true}
          showNotificationIcon={true}
          // onPress={()=>setIsSearching(true)}
        />
      </View>

      <View style={style.totalProduct}>
        <View style={style.resultBox}>
          <View>
            <Text style={style.txt}>{Strings.SearchResults}</Text>
            <Text>{Strings.TotalProductAvailable}</Text>
          </View>
          <TouchableOpacity style={style.filter}>
            <Image source={Images.filter} />
            <Text style={style.filterTxt}>{Strings.Filters}</Text>
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

      {/* Only show buttons when not searching */}
      {/* {!isSearching && ( */}
        <View style={style.buttons}>
          <TouchableOpacity style={style.cartbtn}>
            <AntDesign name='shoppingcart' size={25} style={style.cartIcon}/>
            <Text style={style.cartTxt}>{Strings.ViewCart}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.chackOutbtn}>
              <Text style={style.chackOuttext}>{Strings.ChackOut}</Text>
              <MaterialCommunityIcons name='arrow-collapse-right' size={25} style={style.chackOuticon}/> 
          </TouchableOpacity>
        </View>
      {/* )} */}
    </View>
  );
};

export default Search;
