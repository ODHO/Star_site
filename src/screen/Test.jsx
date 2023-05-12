import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useRef} from 'react'

export default function test() {
    const first = useRef()
    const last = useRef()
    // console.log("first input",first.current.focus())
    // console.log("last input",last)


  return (
    <View>
      <TextInput placeholder='enter name' blurOnSubmit={false} returnKeyType='next' onSubmitEditing={()=>first.current.focus()} />
      <TextInput placeholder='enter First'  blurOnSubmit={false} returnKeyType='next' ref={first} onSubmitEditing={()=>last.current.focus()}  />
      <TextInput placeholder='enter Last'  blurOnSubmit={false} ref={last} returnKeyType='done' />

    </View>
  )
}

const styles = StyleSheet.create({})