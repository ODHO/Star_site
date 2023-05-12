import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import { APPTHEME, COLORS } from '../constant/theme'
import Icon from "react-native-vector-icons/Ionicons"

export default function CustomInput(props) {
  // const {data} = props

  // console.log(props)
//  console.log("submit",props.submit);
  return (
   <View style={styles.container}>
      <Text style={styles.lable}>{props.lable}</Text>
      <View style={styles.input}>
      <TextInput placeholder={props.placeholder} style={{  fontSize:18,flex:1,color:COLORS.White}}
      placeholderTextColor={"white"}
      onChangeText={(text)=>props.value(text)}
      secureTextEntry={props.secureTextEntry ? true : false}
      // returnKeyType={props.type}
      // onSubmitEditing={props?.submit}
      // blurOnSubmit={false}
      />
    {
      props.secureTextEntry?
      <Icon name="eye-off-outline" size={22} color={COLORS.White} />
      :""
    }
      </View>
   </View>
  )
}
const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    borderRadius:10,
    borderColor:"#ffff",
    padding:10,
    paddingVertical:5,
    fontSize:18,
    color:"white",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  lable:{
    fontSize:20,
    color:"#ffff",
    fontWeight:"600",
    alignSelf:"flex-start",
    marginBottom:8
  },
  container:{
    width:"100%",
    marginVertical:APPTHEME.Padding,

  },


})