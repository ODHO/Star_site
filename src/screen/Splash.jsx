import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import React ,{useEffect}from 'react'
import { SIZE } from '../constant/theme'

export default function Splash({navigation}) {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate("login")
    },1000)
  },[])
  return (
    <ImageBackground style={{flex:1,alignItems:"center",justifyContent:"flex-end"}} source={require("../asset/background.png")} >
       <View style={styles.second}>
        <Image source={require("../asset/logowhite.png")} resizeMode='cover' style={{width:SIZE.width/1,height:SIZE.height/4}} />
        <Image source={require("../asset/gold.png")} resizeMode='contain'  style={{width:SIZE.width/0.1,height:SIZE.height/2.6,alignSelf:"center"}}/>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  second:{
  alignItems:"center",
  justifyContent:"space-between",
  flex:0.7,
  flexDirection:'column',
  width:SIZE.width,
  }
})