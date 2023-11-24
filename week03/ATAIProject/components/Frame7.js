import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import {Image} from 'react-native';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Frame7(){
    return(
        <View style={styles.container}>
                <Text style={{top:'40px',fontWeight:'700', fontSize:'25px', lineHeight:'29.3px', alignSelf:'center'}}>
                     LOGIN
                </Text>
               <View style={styles.text_input}>
                  <Text style={{top:'15px',left:'15px',fontSize:'18px',fontWeight:'600',lineHeight:'21.1px'}}>
                    Email
                  </Text>
                </View> 
                <View style={styles.text_input}>
                  <Text style={{top:'15px',left:'15px',fontSize:'18px',fontWeight:'600',lineHeight:'21.1px'}}>
                    Password
                  </Text>
                  <Icon name='eye' size={35} style={{left:'305px', top:'-14px'}}></Icon>
                </View> 
                
            
            
            <View style={{width:'360px',height:'45px',backgroundColor:'#E53935', alignSelf:'center', justifyContent:'center', top:'130px'}}>
                <Text style={{color:'#FFFFFF', fontWeight:'700',fontSize:'20px', lineHeight:'23.44px', alignSelf:'center'}}>LOGIN</Text>
            </View>
            <Text style={{fontWeight:'500', fontSize:'14px',textAlign:'center', top:'150px', lineHeight:'16.4px'}}>
                 When you agree to terms and conditions
            </Text>
            <Text style={{color:'#5D25FA',fontWeight:'500', fontSize:'14px',textAlign:'center', top:'170px', lineHeight:'16.4px'}}>
                 For got your password?
            </Text>
            <Text style={{fontWeight:'500', fontSize:'14px',textAlign:'center', top:'190px', lineHeight:'16.4px'}}>
                 Or login with
            </Text>
            <View style={{width:'360px',height:'45px',borderWidth:'1px',borderColor:'#1593c5',marginTop:'240px', alignSelf:'center', flexDirection:'row'}}>
                  <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#275a8d',width:'120px',height:'45px'}}>
                      <Icon name='facebook' size={30} color="white">

                      </Icon>
                  </View>
                  <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#1593c5',height:'45px',width:'120px'}}>
                      <Text style={{color:'#FFFFFF',fontSize:'36px', fontWeight:'800',top:'-1px'}}>
                        Z
                      </Text>
                  </View>
                  <View style={{alignItems:'center',justifyContent:'center',width:'120px',height:'45px'}}>
                       <Image source={require('../img/googleColor.svg')} style={{height:'35px',width:'35px'}}>

                       </Image>
                  </View>
                      
          </View>
        </View>
)};

const styles = StyleSheet.create({
    container:{
        height:'100%',
        flex: 1,
        backgroundColor:'#d8efde'
    },
    text_input:{
        top: '70px',
        width:'360px',
        height:'55px',
        backgroundColor: '#c9e0d0',
        alignSelf:'center',
        marginTop: '35px'
    },

});

