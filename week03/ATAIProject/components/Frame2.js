import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
export default function (){
return (
    <View style={styles.container}>
        <View style={styles.circle}></View>
    <Text style={styles.title1}>
      GROW
    </Text>
    <Text style={styles.title2}>
      YOUR BUSINESS
    </Text>
    <Text style={styles.text}>
    We will help you to grow your business using online server
    </Text>
   <LinearGradient
      colors={['#c9f3f6','#e3f4f5','#21d1f8']}
      start={[0,0]}
      end={[0,1]}
      style={styles.background}>
    <View style={styles.button_div}>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>LOGIN</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>SIGN UP</Text>
        </Pressable>
      </View>
      <Text style={styles.text_footer}>
              HOW WE WORK?
      </Text>
 </LinearGradient>
</View>
)
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'#c9f3f6',
    },
    background:{
      justifyContent:'center',
      width: '100%',
      height: '30%',
    },
    circle:{
      alignSelf:'center',
      width: '140px',
      height: '140px',
      marginTop: '120px',
      borderWidth: '15px',
      borderRadius: '75px',
    },
    title1: {
      alignSelf:'center',
      width:'180px',
      height: '20px',
       textAlign: 'center',
       marginTop: '50px',
       fontSize: '25px',
       fontWeight: '700',
       lineHeight: '29px',
  
    },
    title2: {
      alignSelf:'center',
      width:'300px',
      height: '20px',
      marginTop:'10px',
       textAlign: 'center',
       fontSize: '25px',
       fontWeight: '700',
       lineHeight: '29px',
  
    },
    text:{
      alignSelf:'center',
      marginTop: '45px',
      textAlign: 'center',
      fontSize: '15px',
      fontWeight: '700',
      lineHeight: '17.5px',
      width: '330px',
      height: '60px',
    },
    button_div: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
  
    btnText: {
      fontWeight: '700',
      fontSize: '20px',
      lineHeight: '23.44px',
      textAlign: 'center'
    },
  
    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '130px',
      height: '45px',
      backgroundColor: '#E3C000',
      marginTop: '-80px'
    },
    text_footer:{
        fontSize:'18px',
        fontWeight: '700',
        alignSelf:'center',
        lineHeight: '21px',
    },
  });