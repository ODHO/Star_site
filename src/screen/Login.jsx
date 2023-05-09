import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomInput from '../component/CustomInput';
import { APPTHEME } from '../constant/theme';
import CustomButton from '../component/CustomButton';

export default function Login() {
  return (
      <LinearGradient colors={['#A266F4', '#7F27F4']} style={styles.linearGradient}>
        <Text style={styles.heading}>Login</Text>
        <CustomInput lable="Email" placeholder="Enter your Email" />
        <CustomInput lable="Password" placeholder="Enter your Password" secureTextEntry />
        <CustomButton />
      </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient:{
    flex:1,
    // alignItems:"center",
    padding:APPTHEME.Padding*3,
   
  },
  heading:{
    fontSize:30,
    fontWeight:"bold",
    letterSpacing:3
  }
})