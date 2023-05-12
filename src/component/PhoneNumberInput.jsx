import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useRef} from 'react'
import PhoneInput from "react-native-phone-number-input";
import { APPTHEME, COLORS } from '../constant/theme';

export default function PhoneNumberInput(props) {
    const [value,setValue] = useState("")
    const [formattedValue, setFormattedValue] = useState("");
    const phoneInput = useRef(null)

    return (
        <View style={styles.container}>
            <Text style={styles.lable}>{props.lable}</Text>
                <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                layout='first'
                defaultCode="PK"
                onChangeText={(text) => {
                setValue(text);
                }}
                containerStyle={styles.containerStyle}
                textContainerStyle={{backgroundColor:"transparent",color:COLORS.White}}
                textInputProps={{placeholderTextColor:COLORS.White,fontSize:18,padding:0}}
                onChangeFormattedText={(text) => {
                setFormattedValue(text);
                }}
                codeTextStyle={{color:"white"}}
                textInputStyle={{color:"#fff"}}
                style={{color:"yellow",padding:0,margin:0}}
                disableArrowIcon
                countryPickerButtonStyle={{marginRight:-30}}
            />
        </View>
  )
}
const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor:"transparent",
        borderWidth:1,borderColor:
        "white",borderRadius:10,
        width:"100%",
        color:"blue",
        // height:80,
        // paddingVertical:-220,
        // height:70

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