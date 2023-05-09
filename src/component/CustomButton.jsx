import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { APPTHEME } from '../constant/theme'

export default function CustomButton() {
  return (
    <Button title='Login' style={styles.button} color={"black"} >Login</Button>
  )
}

const styles = StyleSheet.create({
    button:{
        width:"100%",
        padding:100
        

    }
})