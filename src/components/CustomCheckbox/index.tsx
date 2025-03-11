import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Pressable 
      onPress={() => setChecked(!checked)} 
      style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
    >
      <Icon 
        name={checked ? "check-box" : "check-box-outline-blank"} 
        size={24} 
        color={checked ? "blue" : "gray"} 
      />
      <Text style={{ marginLeft: 10,color:'black'}}>Terms & Condition Applied</Text>
    </Pressable>
  );
};

export default CustomCheckbox;
