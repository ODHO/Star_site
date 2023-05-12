import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { COLORS, SIZE } from '../constant/theme'

export default function Header(props) {
  return (
    <View style={styles.iconsContainer}>
    { props.start ? <Image source={props?.start} style={styles.icons} /> :""}
   {typeof props.center ==='string' ? <Text style={{fontSize:SIZE.h3,color:COLORS.h2,fontWeight:"bold"}}>{props.center}</Text> :  <Image source={props?.center} style={[styles.icons,{width:240,height:40,}]} />}
    
   { typeof props.center ==='string' ? <Text style={{fontSize:18}}>{props.end}</Text>  
   : <View style={{flexDirection:"row",columnGap:6}}>
   <Image source={props?.end} style={styles.icons} />
   <Image source={props?.last} style={styles.icons} />
</View>
    }
    </View>
  )
}
const styles = StyleSheet.create({
    iconsContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
        // backgroundColor:"black"
      },
      icons:{
        width:25,
        height:25
      },
})