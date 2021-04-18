import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {colors} from "../utils/color"
import {fontSizes} from "../utils/sizes"
export const RoundedButton= ({
  style={},
  textStyle={},
  size=125,
  ...props
})=>{
  return(
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
      <Text style={[styles(size).text,textStyle]}>{props.title} </Text>
    </TouchableOpacity>
  )
}

const styles = (size) => StyleSheet.create({
  radius:{
    borderRadius: size / 2 ,
    width: size,
    height: size,
    borderColor: colors.white,
    borderWidth:2, 
    alignItems:"center",
    justifyContent:"center",


  },
  text:{
    color: colors.white,
    fontSize:fontSizes.md
  
  }
})