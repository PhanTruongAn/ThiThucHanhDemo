import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import * as React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-web';
export default function Frame5(){
    return(
        <View style={styles.container}>
                <Text style={{top:'40px',fontWeight:'700', fontSize:'25px', lineHeight:'29.3px', textAlign:'center'}}>
                     REGISTER
                </Text>
               <View style={styles.text_input}>
                  <Text style={{top:'15px',left:'10px',fontSize:'18px',fontWeight:'600',lineHeight:'21.1px'}}>
                    Name
                  </Text>
                </View> 
                <View style={styles.text_input}>
                  <Text style={{top:'15px',left:'10px',fontSize:'18px',fontWeight:'600',lineHeight:'21.1px'}}>
                    Phone
                  </Text>
                </View> 
                <View style={styles.text_input}>
                  <Text style={{top:'15px',left:'10px',fontSize:'18px',fontWeight:'600',lineHeight:'21.1px'}}>
                    Email
                  </Text>
                </View> 
                <View style={styles.text_input}>
                  <Text style={{top:'15px',left:'10px',fontSize:'18px',fontWeight:'600',lineHeight:'21.1px'}}>
                    Password
                  </Text>
                  <Icon name='eye' size={35} style={{left:'275px', top:'-13px'}}>
                  </Icon>
                </View> 
                <View style={styles.text_input}>
                  <Text style={{top:'15px',left:'10px',fontSize:'18px',fontWeight:'600',lineHeight:'21.1px'}}>
                    Birthday
                  </Text>
                </View> 
            
            <View style={{width:'23px',height:'23px', borderRadius:'75px',borderWidth:'2px', top: '70px', left:'50px',}}></View>
            <Text style={{fontSize:'18px', fontWeight:'400',lineHeight:'21.1px', top: '48px', left:'90px'}}>Male</Text>
            <View style={{width:'23px',height:'23px', borderRadius:'75px',borderWidth:'2px', top: '25px', left:'160px'}}></View>
            <Text style={{fontSize:'18px', fontWeight:'400',lineHeight:'21.1px', top: '2px', left:'200px'}}>Female</Text>

            <View style={{width:'330px',height:'50px',backgroundColor:'#E53935', alignSelf:'center', justifyContent:'center', top:'30px'}}>
                <Text style={{color:'#FFFFFF', fontWeight:'700',fontSize:'20px', lineHeight:'23.44px', alignSelf:'center'}}>REGISTER</Text>
            </View>
            <Text style={{fontWeight:'700', fontSize:'14px',textAlign:'center', top:'45px'}}>
            When you agree to terms and conditions
            </Text>
        </View>
)};

const styles = StyleSheet.create({
    container:{
        height:'100%',
     flex: 1,
     backgroundColor: '#d8efde',
     
    },
    text_input:{
        top: '50px',
        width:'330px',
        height:'55px',
        backgroundColor: '#c9e0d0',
        alignSelf:'center',
        marginTop: '18px'
    },

});

