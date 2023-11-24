import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import * as React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-web';
export default function Frame6(){
    return(
        <View style={styles.container}>
                <LinearGradient
                colors={['#FBCB00','#BF9A00']}
                start={[1,0]}
                end={[0,0.5]}
                style={{height:'100%'}}
                >
                <Text style={{top:'70px',left:'30px',fontWeight:'700', fontSize:'30px', lineHeight:'29.3px'}}>
                     LOGIN
                </Text>
               <View style={styles.text_input}>
                  <Text style={{top:'15px',left:'55px',fontSize:'18px',fontWeight:'600',lineHeight:'21.1px'}}>
                    Name
                  </Text>
                  <Icon
                  name='user' size={37}
                  style={{top:'-12px', left:'10px'}}
                  ></Icon>
                </View> 
                <View style={styles.text_input}>
                  <Text style={{top:'15px',left:'55px',fontSize:'18px',fontWeight:'600',lineHeight:'21.1px'}}>
                    Password
                  </Text>
                  <Icon
                  name='lock' size={40}
                  style={{top:'-12px', left:'10px'}}
                  ></Icon>
                  <Icon name='eye' size={35} style={{left:'290px', top:'-52px'}}></Icon>
                </View> 
                
            
            
            <View style={{width:'360px',height:'50px',backgroundColor:'#060000', alignSelf:'center', justifyContent:'center', top:'180px'}}>
                <Text style={{color:'#FFFFFF', fontWeight:'700',fontSize:'20px', lineHeight:'23.44px', alignSelf:'center'}}>LOGIN</Text>
            </View>
            <Text style={{fontWeight:'700', fontSize:'20px',textAlign:'center', top:'230px'}}>
               CREATE ACCOUNT
            </Text>
                </LinearGradient>
        </View>
)};

const styles = StyleSheet.create({
    container:{
        height:'100%',
        flex: 1,
     
    },
    text_input:{
        top: '125px',
        width:'360px',
        height:'55px',
        backgroundColor: '#d8b93b',
        alignSelf:'center',
        borderWidth:'1px',
        borderColor:'#e8d897',
        marginTop: '18px'
    },

});

