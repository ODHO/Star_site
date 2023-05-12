import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState,useRef} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { APPTHEME, GRADIENT,COLORS } from '../constant/theme';
import CustomInput from '../component/CustomInput';
import { Checkbox } from 'react-native-paper';
import CustomCheckbox from '../component/CustomCheckbox';
import CustomButton from '../component/CustomButton';
import DropDown from '../component/DropDown';
import PhoneNumberInput from '../component/PhoneNumberInput';

export default function Signup({navigation}) {
  const text = "By signing up, I agree wih Terms of use and Privacy Policy"
  
  // input useRef
const [isName,setIsName] = useState("")
const [isEmail,setIsEmail] = useState("")
const [isPassword,setIsPassword] = useState("")
const [isRepeatPassword,setIsRepeatPassword] = useState("")
const [isMobile,setIsMobile] = useState("")

// input ref
const nameRef = useRef()
const emailRef = useRef()
const passwordRef = useRef()
const repeatPasswordRef = useRef()
const mobileRef = useRef()




  const name = (value) => {
    setIsName(value)
  }
  const email = (value) => {
    setIsEmail(value)
  }
  const password = (value) => {
   setIsPassword(value)
  }
  const repeatPassword = (value) => {
    setIsRepeatPassword(value)
  }
  const mobileNumber = (value) => {
    setIsMobile(value)
  }
  // const Signup = () => {

  //   // console.log("firstnme",isName,isEmail,isMobile,isPassword,isRepeatPassword)
  // }

  return (
    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false} >
    <LinearGradient colors={[GRADIENT.light,GRADIENT.dark]} style={styles.linearGradient}>
      <Text style={styles.heading}>Sign up</Text>
      <CustomInput lable="Name" placeholder="Your Name" value={name} />
      <CustomInput lable="Email" placeholder="Enter your Name" value={email} />
      <CustomInput lable="Password" placeholder="at least 8 character" secureTextEntry value={password} />
      <CustomInput lable="Repeat Password" placeholder="at least 8 character" secureTextEntry value={repeatPassword} />
      <DropDown lable="Category" />
      <PhoneNumberInput lable="Mobile Number" />
      {/* <CustomInput lable="Mobile Number" placeholder="92 Phone Number" value={mobileNumber} /> */}
      <CustomCheckbox text={text} />
      <CustomButton text="Sign up" goto="home" />
      <Text style={styles.text} onPress={() =>navigation.navigate("home")}>Already have an Account?
      <Text
      onPress={()=>navigation.navigate("login")}
      style={[styles.text,{fontWeight:"bold"}]}
      > Login
      </Text></Text>
    </LinearGradient> 
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
    padding: APPTHEME.Padding * 3,
  },
  text:{
    fontSize:20,
    color:COLORS.White,
    marginVertical:5
  },
  heading:{
    fontSize:40 ,
    fontWeight:"bold",
    color:COLORS.White,
  }

})