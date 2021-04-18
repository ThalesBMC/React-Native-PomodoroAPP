import React,{useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {TextInput} from "react-native-paper"
import {RoundedButton} from "../../components/RoundedButton"
import {fontSizes, spacing} from "../../utils/sizes"
import {colors} from "../../utils/color"
export function Focus({addSubject}) {
  const [subject, setSubject] = useState(null)
  console.log(subject)
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to Focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{marginRight:spacing.md, flex:1}} onChangeText={text => setSubject(text)}/>
          <RoundedButton size={50} title="+" onPress={()=> {addSubject(subject)}} />
        </View>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    
  },
  innerContainer:{
    flex:1,
    padding:spacing.md,
    justifyContent:"center",
  },
  title:{
    color:colors.white,
    fontWeight:"bold",
    fontSize:fontSizes.lg,

  },
  inputContainer:{
    paddingTop:spacing.md,
    flexDirection: "row",
    alignItems: "center"
  }
});
