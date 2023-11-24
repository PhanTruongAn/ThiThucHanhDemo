import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput} from 'react-native';
import * as React from 'react';
import { CheckBox } from "react-native-elements";
import { useState } from "react";
import {Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Frame3(){
  const [isCheckedLowerCase, setIsCheckedLowerCase] = useState(false);
  const [isCheckedUpperCase, setIsCheckedUpperCase] = useState(false);
  const [isCheckedNumber, setIsCheckedNumber] = useState(false);
  const [isCheckedSpecialSymbol, setIsCheckedSpecialSymbol] = useState(false);
  const [passwordLength, setPasswordLength] = useState(6);
  const [generatedPassword, setGeneratedPassword] = useState('');
  
  const toggleCheckLowerCase = () => {
    setIsCheckedLowerCase(!isCheckedLowerCase);
  };

  const toggleCheckUpperCase = () => {
    setIsCheckedUpperCase(!isCheckedUpperCase);
  };

  const toggleCheckNumber = () => {
    setIsCheckedNumber(!isCheckedNumber);
  };

  const toggleCheckSpecialSymbol = () => {
    setIsCheckedSpecialSymbol(!isCheckedSpecialSymbol);
  };

  const generatePassword = () => {
    const charset = [];

    if (isCheckedLowerCase) {
      charset.push("abcdefghijklmnopqrstuvwxyz");
    }
    if (isCheckedUpperCase) {
      charset.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (isCheckedNumber) {
      charset.push("0123456789");
    }
    if (isCheckedSpecialSymbol) {
      charset.push("!@#$%^&*()_+-=[]{}|;:,.<>?");
    }

    if (charset.length === 0) {
      alert("Please select one option at least for password!");
      return;
    }

    const password = [];
    for (let i = 0; i < passwordLength; i++) {
      const randomCharsetIndex = Math.floor(Math.random() * charset.length);
      const selectedCharset = charset[randomCharsetIndex];
      const randomCharIndex = Math.floor(
        Math.random() * selectedCharset.length
      );
      const randomChar = selectedCharset[randomCharIndex];
      password.push(randomChar);
    }

    const generatedPassword = password.join("");
    setGeneratedPassword(generatedPassword);
  };

    return(
            <View style={styles.container}>
              <View style={styles.div_father}>
                  <View style={styles.header}>
                      <Text style={{color:"white",width:"150px",height:"60px",fontSize:"25px",fontWeight:"700",lineHeight:"29.3px",alignSelf:"center"}}>
                          PASSWORD GENERATOR
                      </Text>
                  </View>
                  <View style={{width:"90%", height:"50px",backgroundColor:"#151537",alignSelf:"center"}}>
                          <TextInput style={{width: "100%",height: "100%",fontSize: "25px",fontWeight: "500",color: "white"}}
                            value={generatedPassword}
                            editable={false}/>
                  </View>
                  <View style={styles.condition}>
                      <Text style={styles.text_condition}>
                      Password length
                      </Text>
                      <Text style={styles.text_condition}>
                      Include lower case letters
                      </Text>
                      <Text style={styles.text_condition}>
                      Include upcase letters
                      </Text>
                      <Text style={styles.text_condition}>
                      Include number
                      </Text>
                      <Text style={styles.text_condition}>
                      Include special symbol
                      </Text>
                  </View>
                  <View style={styles.div_pass}>
                    <TextInput style={{height:"100%",fontSize:"20px",fontWeight:"600",textAlign:"center"}}
                    
                    value={passwordLength.toString()}
                    onChangeText={(text) => setPasswordLength(parseInt(text) || 0)}></TextInput>
                  </View>
                  <View style={styles.div_checkbox}>
                  <CheckBox 
                      checked={isCheckedLowerCase}
                      onPress={toggleCheckLowerCase}  
                      size={30} checkedColor="white" uncheckedColor="white"/>
                  <CheckBox 
                      checked={isCheckedUpperCase}
                      onPress={toggleCheckUpperCase}
                      size={30} checkedColor="white" uncheckedColor="white"/>
                  <CheckBox 
                      checked={isCheckedNumber}
                      onPress={toggleCheckNumber}
                      size={30} checkedColor="white" uncheckedColor="white"/>
                  <CheckBox 
                      checked={isCheckedSpecialSymbol}
                      onPress={toggleCheckSpecialSymbol}
                      size={30} checkedColor="white" uncheckedColor="white"/>
                  </View>
                  
                  <button onClick={generatePassword} style={{marginTop:"-230px",backgroundColor:"#3B3B98",fontSize:"18px",fontWeight:"600",color:"white",width:"85%",height:"60px",alignSelf:"center"}}>
                   GENERATE PASSWORD 
                  </button>
              </View>
              
            </View>

    )};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#6060a8",
    justifyContent:"center",
  },
  
  div_father:{
    width:"350px",
    height:"630px",
    backgroundColor:"#23235b",
    borderRadius:"10px",
    alignSelf:"center",
  },

  header:{
     width:"90%",
     height:"140px",
     backgroundColor:"#23235b",
     justifyContent:"center",
     alignSelf:"center"
  },

  condition:{
    width:"70%",
    height:"300px",
    backgroundColor:"#23235b",
    alignSelf:"center",
    marginTop:"30px",
    left:"-36px",
    flexDirection:"column",
  },
  text_condition:{
    fontSize:"20px",
    fontWeight:"600",
    color:"white",
    lineHeight:"62px",
  },
  div_checkbox:{
        width:"80px",
        height:"230px",
        backgroundColor:"#23235b",
        flexDirection:"column",
        top:"-255px",
        left:"265px",
        alignItems:"center"
  },
  checkbox:{
        width:"40px",
        height:"40px",
        margin:"17px",      
  },
  div_pass:{
    width:"120px",
    height:"25px",
    backgroundColor:"white",
    top:"-280px",
    left:"195px",
  },
});
