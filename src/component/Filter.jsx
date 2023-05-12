import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState} from 'react'
import  AntDesign from "react-native-vector-icons/AntDesign"
import { Divider, Button, Menu, } from 'react-native-paper'
import { COLORS } from '../constant/theme';




export default function Filter() {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

  return (
    <View  style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom:10
        // alignItems:"center",
      }}>
         <Menu
          visible={visible}
          // contentStyle={{backgroundColor:COLORS.White}}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}><Image source={require("../asset/filter.png")} resizeMode='cover' style={{width:25,height:25}} /></Button>}>
          <Menu.Item onPress={() => {}} title="Recent" titleStyle={styles.title} />
          <Divider bold />
          <Menu.Item onPress={() => {}} title="Date" titleStyle={styles.title} />
        </Menu>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:15,
        textTransform:"capitalize"
    }
})