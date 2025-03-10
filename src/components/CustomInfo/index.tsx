import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style'

interface inputTypes{
    label:string;
  }
  

const CustomeInfo = ({ label}:inputTypes) => {
  return (
    <View>
      <View style={[styles.subContainer]}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </View>
  )
}

export default CustomeInfo

