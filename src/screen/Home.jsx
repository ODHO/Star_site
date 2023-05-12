import { StyleSheet, Text, View,Image,FlatList,ScrollView } from 'react-native'
import React,{useState} from 'react'
import { APPTHEME, COLORS } from '../constant/theme'
import Header from '../component/Header'
import { Divider, Button, Menu, } from 'react-native-paper'
import Card from '../component/CustomCard'
import CardDrop from '../component/CardDrop'
import Filter from '../component/Filter'


export default function Home({navigation}) {
  let menu = require("../asset/menu.png")
  let center = require("../asset/colorLogo.png")
  let notification = require("../asset/notification.png")
  let message = require("../asset/message.png")

  const [selectedOption, setSelectedOption] = useState(null);

  //filter
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);


  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const list = [
    "Wednesday,Februrary,22",
    "Thursday,Februrary,23",
    "Friday,Februrary,24",
    "Saturday,Februrary,25",
    "Sunday,Februrary,26",

  ]

  const CardData= [
    {
      name:"Faizan Azahar",
      timing:"07-50 PM - 08:30 PM",
      url:"https://images.unsplash.com/photo-1609081524998-a1163e2d44cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwYm95fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      callType:"Audio Call"
    },
    {
      name:"Faizan Azahar",
      timing:"07-50 PM - 08:30 PM",
      url:"https://images.unsplash.com/photo-1602133187081-4874fdbd555c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80",
      callType:"Video Call"
    },
    {
      name:"Faizan Azahar",
      timing:"07-50 PM - 08:30 PM",
      url:"https://i.pinimg.com/originals/c3/33/27/c333273fcfc3198e93df380c0cfc0437.jpg",
      callType:"Audio Call"
    }
  ]


  
    return (
    <View style={styles.mainContainer}>
      <View style={{padding:APPTHEME.Padding*2}}>

          <Header start={menu} center={center} end={message} last={notification}  />
          <View>
            <Text style={styles.heading}>Welcome</Text>
            <Text style={styles.secondHeading}>Hamza Ali Abbasi</Text>
          </View>
          <Text style={styles.appointment} onPress={()=>navigation.navigate("userprofile")}>Appointments</Text>
      </View>
      <Divider bold={true} style={{backgroundColor:COLORS.h1}} />
        <Filter />

        {/* <ScrollView style={{padding:APPTHEME.Padding*2,marginBottom:30}} showsVerticalScrollIndicator={false}>
           */}
          <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={({item})=> <CardDrop item={item} options={CardData} onSelect={handleSelectOption} /> }
          />          
        {/* </ScrollView> */}

    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        // padding:APPTHEME.Padding*2,
        backgroundColor:COLORS.White,
        // backgroundColor:
    },
    heading:{
        color:COLORS.h1,
        fontSize:25,
        fontWeight:"bold",
    },
    secondHeading:{
        fontSize:18,
        color:COLORS.h2
    },
    appointment:{
      fontSize:25,
      color:COLORS.h2,
      fontWeight:"bold",
      alignSelf:"center"
    }
})