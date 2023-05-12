import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { APPTHEME, COLORS } from '../constant/theme'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native' 

export default function CustomButton(props) {
  const navigation = useNavigation()
  return (
    <Button mode="elevated" aria-label='Dilawar' labelStyle={[styles.labelStyle,{color:props.color? props.color :"#7F27F4"}]} onPress={() => navigation.navigate(props.goto)}
     style={[styles.button,{backgroundColor:props.bg? props.bg : COLORS.White}]}>
    {props.text}
  </Button>
  )
}
const styles = StyleSheet.create({
    button:{
     borderRadius:8,
     paddingVertical:APPTHEME.Padding,
     backgroundColor:COLORS.White,
     width:"100%",
    },
    labelStyle:{
        color:"#7F27F4",
        fontSize:22,
    }
    
})