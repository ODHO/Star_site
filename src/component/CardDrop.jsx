import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import CustomCard from './CustomCard';
import { Divider } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons"
import { COLORS } from '../constant/theme';



const CardDrop = ({ options, onSelect,item }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSelectOption = (option) => {
    onSelect(option);
    toggleDropdown();
  };
  return (
    <>
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownToggle}>
        <Text style={styles.dropdownToggleText}>{item}</Text>
        <Ionicons name={ isOpen ?"chevron-up" : "chevron-down"} size={25} color={COLORS.h1} />
      </TouchableOpacity>
      {isOpen && (
        <FlatList
          data={options}
          keyExtractor={(item) => item.id}
          renderItem={( {item} ) => (
                <CustomCard item={item} />
          )}
        />
      )}
    </View>
    <Divider bold />
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dropdownToggle: {
    // backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  dropdownToggleText: {
    fontSize: 20,
    color: COLORS.h1,
    textTransform:"capitalize" 
  },
  dropdownOption: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CardDrop;
