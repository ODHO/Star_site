import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomInput from '../component/CustomInput';
import { APPTHEME, COLORS, GRADIENT, SIZE } from '../constant/theme';
import CustomButton from '../component/CustomButton';
import { Checkbox } from 'react-native-paper';


export default function Login({navigation}) {
  const [checked, setChecked] = React.useState(false);
  return (
    <LinearGradient colors={[GRADIENT.light,GRADIENT.dark]} style={styles.linearGradient}>
      
      <Image source={require("../asset/logowhite.png")} style={{width:SIZE.width/1.1,height:SIZE.height/5}} resizeMode='cover' />

      <Text style={styles.heading}>Login</Text>
      <CustomInput lable="Email" placeholder="Enter your Email" />
      <CustomInput lable="Password" placeholder="Enter your Password" secureTextEntry />
      <View style={{
        flexDirection: "row", alignItems: "center", justifyContent: "space-between",
        width: "100%", marginVertical: 10
      }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>

          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color={APPTHEME.Primary}
            uncheckedColor={COLORS.White}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={[styles.forgot,{fontWeight:"bold"}]}>Remember me</Text>
        </View>
        <Text style={styles.forgot} onPress={()=> navigation.navigate("signup")} >Forgot Password?</Text>


      </View>
      <CustomButton text="Login"  goto="signup"/>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
    padding: APPTHEME.Padding * 3,

  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.White
  },
  forgot: {
    color: COLORS.White,
    fontSize: 15
  }
})