import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import { COLORS } from '../constant/theme'
import Ionicons from "react-native-vector-icons/Ionicons"
import ImageCard from '../component/ImageCard'

export default function Profile() {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.first}>
        <ImageBackground resizeMode='cover' style={styles.backgroundImg} source={{uri:"https://ceotudent.com/wp-content/images/post/user-799/6cgynk.jpg"}}>
        <Ionicons name="chevron-back" size={25} />
        <Text style={{alignSelf:"flex-end"}}>Edit</Text>
        </ImageBackground>
    </View>
    <View style={styles.second}>
<ImageCard />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.White
    },
    first:{
        flex:0.3,
        backgroundColor:"red",
        borderBottomEndRadius:40,
        borderBottomLeftRadius:40,
        overflow:"hidden",
        
    },
    second:{
        flex:0.7,
        backgroundColor:"gray"
    },
    backgroundImg:{
        width:"100%",
        height:"100%",  
    }
})