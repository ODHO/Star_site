import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SIZE } from '../constant/theme'

export default function ImageCard() {
  return (
    <View style={{alignItems:"center"}}>
      <Image style={styles.img} resizeMode='cover' source={{uri:"https://ceotudent.com/wp-content/images/post/user-799/6cgynk.jpg"}} />
    </View>
  )
}
const styles = StyleSheet.create({
    img:{
        width:SIZE.width/2.5,
        height:SIZE.height/4.4 ,
        borderRadius:14
    }
})