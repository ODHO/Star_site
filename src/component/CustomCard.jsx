import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper';
import { APPTHEME, COLORS } from '../constant/theme';
import { useNavigation } from '@react-navigation/native' 


export default function CustomCard({item}) {
  const navigation = useNavigation()
  return (
    <View style={styles.card} onPress={()=>navigation.navigate("userprofile")}>
      <Image resizeMode='cover' style={styles.img} source={{uri:item.url}} />
     <View>
        <Text style={styles.name}>
          {item.name}
        </Text>
        <Text style={styles.time}>
          {item.timing}
        </Text>
      </View>
      <Text style={styles.call}>
        {item.callType}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:COLORS.White,
    borderRadius:10,
    borderColor:COLORS.h2,
    borderWidth:1,
    flexDirection:"row",
    padding:APPTHEME.Padding*2,      
    justifyContent:"space-between",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,
elevation: 3,
marginBottom:15
  },
  img:{
    borderRadius:10,
    width:90,
    height:90
  },
  call:{
    color:"#FBAE17",
    fontSize:15,
  },
  name:{
    color:COLORS.h2,
    fontWeight:"bold",
    fontSize:20
  },
  time:{
    fontSize:15,
    textTransform:"uppercase"  
  }
})