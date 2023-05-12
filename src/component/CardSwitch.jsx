import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Switch } from 'react-native-paper';
import { COLORS, SIZE } from '../constant/theme';


export default function CardSwitch({data}) {
    console.log("DDD",data)

    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={styles.switchCard}>
      <Text style={styles.text}>{data.item}</Text>

      <View style={{flexDirection:"row",columnGap:10,alignItems:"center"}}> 
        <Text style={{fontSize:15,color:"#333343"}}>View</Text>
        <Text style={{fontSize:15,color:"#333343"}}>Edit</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color='#7F27F4' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    switchCard:{
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        marginVertical:8
    },
    text:{
        fontSize:SIZE.h2,
        color:COLORS.h2,
        fontWeight:"bold",
        textTransform:"capitalize"
    }
})