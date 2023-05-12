import { StyleSheet, Text, View } from 'react-native'
import react,{useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { APPTHEME, COLORS } from '../constant/theme';
import DropDown from 'react-native-paper-dropdown';
import { SelectList } from 'react-native-dropdown-select-list'
import Icon from "react-native-vector-icons/Ionicons"



export default function CustomDropDown(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("dilawar");
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{props.lable}</Text>
    {/* <DropDownPicker
    style={styles.drop}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      /> */}
      {/* <DropDown
              label={<Text style={{  fontSize:18,flex:1,color:"black"}}>Select Category</Text>}
              mode={"flat"}
              // dropDownStyle={styles.drop}
              
              visible={showMultiSelectDropDown}
              showDropDown={() => setShowMultiSelectDropDown(true)}
              onDismiss={() => setShowMultiSelectDropDown(false)}
              value={value}
              dropDownItemStyle={{fontSize:30}}
              setValue={setValue}
              left={()=><Text.icon icon="user"/>}
              list={items}
              styl
              // multiSelect
        /> */}
            <SelectList 
            inputStyles={styles.input}
            setSelected={(val) => setValue(val)} 
            data={items} 
            dropdownTextStyles={{color:"white",color:"white",fontSize:18}}
            save="value"
            search={false}
            dropdownStyles={{borderColor:"white",borderWidth:1,}}
            placeholder='Select category'
            boxStyles={{borderWidth:1,borderColor:"white"}}
            arrowicon={<Icon name="chevron-down" size={20} color="white" />}
    />
    </View>
  );
}
const styles = StyleSheet.create({
  drop:{  
    borderWidth:1,
    borderRadius:10,
    fontSize:18,
    backgroundColor:"red"
  },
  container:{
    width:"100%",
    marginVertical:APPTHEME.Padding,
    backgroundColor:"transparent"
  },
  lable:{
    fontSize:20,
    color:"#ffff",
    fontWeight:"600",
    alignSelf:"flex-start",
    marginBottom:8
  },
  placeholder:{
    fontSize:12,
    color:COLORS.White,
  },
  input:{
    paddingVertical:4,
    fontSize:18,
    color:"white",  
  }
})