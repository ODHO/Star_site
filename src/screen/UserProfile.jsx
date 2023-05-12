import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { APPTHEME, COLORS, SIZE } from '../constant/theme'
import Ionicons from "react-native-vector-icons/Ionicons"
import { Divider } from 'react-native-paper'

export default function UserProfile({navigation}) {
    return (
        <View style={styles.mainConatiner}>
            {/* <View style={styles.userImg}> */}
            <ImageBackground style={{ width: "100%", height: "100%", flex: 0.5}} resizeMode='cover' source={{ uri: "https://ceotudent.com/wp-content/images/post/user-799/6cgynk.jpg" }}>
                <Ionicons name="chevron-back" size={25} />
            </ImageBackground>
            {/* </View> */}
            <View style={styles.userInfo}>
                <View style={styles.info}>
                    {/* //top */}
                    <View style={{ flexDirection: "row", columnGap: 20,alignSelf:"center" }}>
                        <Image style={{ borderRadius: 50, backgroundColor: "blue", width: 40, height: 40 }} resizeMode='contain' source={require("../asset/IconSideM.png")} />
                        <Text style={{ fontSize: SIZE.h3, color: COLORS.h2, fontWeight: "bold" }}>
                            Faizan Azhar
                        </Text>
                    </View>

                        {/* middle */}
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>

                    <View>
                        <Text style={[styles.text,{color:COLORS.yellow}]}>
                            Audio Call : 2 min
                        </Text>
                        <Text style={[styles.text,{color:COLORS.h1}]} onPress={()=>navigation.navigate("time")} >
                            07:50 PM - 08:00 PM
                        </Text>
                    </View>
                    <Image style={{ borderRadius: 50, backgroundColor: "blue", width: 40, height: 40 }} resizeMode='contain' source={require("../asset/IconSideM.png")} />
                    </View>

                    <Text style={{fontSize:SIZE.h3,color:COLORS.h2,fontWeight:'bold',marginTop:15}}>
                        Instructions
                    </Text>
                    <Divider bold />

                    <Text style={{fontSize:15,color:COLORS.h1,marginVertical:15,textAlign:"justify"}}>lorem perspiciatis, vel laborum eligendi excepturi reprehenderit sunt nulla voluptate adipisci ipsum  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus aspernatur impedit tempora perspiciatis provident similique est, commodi rerum architecto numquam deleniti nostrum voluptatesiste.</Text>
                    
                    <Divider bold />

                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
    },
    userImg: {
        flex: 0.5,
        backgroundColor: "red",
    },
    userInfo: {
        flex: 0.5,
        backgroundColor: COLORS.White,
        paddingHorizontal: APPTHEME.Padding*3.5,
    },
    info: {
        backgroundColor: "white",
        borderRadius: 25,
        borderColor: COLORS.h2,
        borderWidth: 2,
        padding:APPTHEME.Padding*2.8,
        position:"relative",
        top:-70,
        height:SIZE.height/1.9
    },
    text:{
        fontSize:20
    }
})