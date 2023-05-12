import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper';
import { COLORS,APPTHEME } from '../constant/theme';

export default function customCheckbox(props) {
    const [checked,setChecked] = useState(false)
  return (
        <View style={{ flexDirection: "row", alignItems: "center",alignSelf:"flex-start",marginVertical:6 }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color={COLORS.White}
            uncheckedColor={COLORS.White}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={[styles.forgot,{fontWeight:props.bold? "500":"bold"}]}>{props.text}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    forgot: {
        color: COLORS.White,
        fontSize: 15
      }
})