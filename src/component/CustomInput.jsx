import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { APPTHEME } from '../constant/theme'

export default function CustomInput(props) {
  return (
   <View style={styles.container}>
      <Text style={styles.lable}>{props.lable}</Text>
      <TextInput placeholder={props.placeholder} passwordRules style={styles.input}
      placeholderTextColor={"white"}
      secureTextEntry={props.secureTextEntry ? true : false}
      />
   </View>
  )
}
const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    borderRadius:10,
    borderColor:"white",
    padding:10,
    paddingVertical:12,
    fontSize:18,
    color:"white"
  },
  lable:{
    fontSize:20,
    color:"white",
    fontWeight:"bold",
    letterSpacing:2,
    alignSelf:"flex-start",
    marginBottom:8
  },
  container:{
    width:"100%",
    marginVertical:APPTHEME.Padding
    // margin:APPTHEME.Padding
  }
})