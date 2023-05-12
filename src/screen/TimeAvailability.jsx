import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { APPTHEME, COLORS } from '../constant/theme'
import Header from '../component/Header'
import CardSwitch from '../component/CardSwitch'
import CustomButton from '../component/CustomButton'


export default function TimeAvailability() {
    let back = require("../asset/back.png")
    let notification = require("../asset/IconNotification.png")
    let message = require("../asset/IconNotification.png")

    const list=[
        "monday","Tuesday","Wednesday","Thursdat","Friday","Saturday","Sunday"
    ]
  return (
    <View style={{paddingHorizontal:APPTHEME.Padding*2}}>
        <Header start={back} center="Time Availability" end={"Add"} last={message} />
        
        <FlatList
        data={list}
        renderItem={(item)=> <CardSwitch data={item} />}
        />
       <CustomButton bg={COLORS.h2} text="Save" color={COLORS.White} />
    </View>
  )
}

const styles = StyleSheet.create({})