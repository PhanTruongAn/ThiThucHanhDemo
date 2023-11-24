import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import * as React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Frame8(){
    return(
     <View style={{backgroundColor:'white', width:'100%',height:'100%',flex:1}}>
              <Image source={require('../img/EyeBall.png')} 
              style={{width:'100px',height:'100px',alignSelf:'center', top:'50px'}}>
              </Image>
            <View style={{width:'350px', height:'45px', borderBottomWidth:'1px',borderColor:'#d3cdcd' , alignSelf:'center', top:'90px'}}>
                  <Image source={require('../img/user36.png')} style={{width: '36px',height:'36px',top:'4px'}}>

                  </Image>
                  <Text style={{fontSize:'18px',fontWeight:'400px',lineHeight:'21.1px', color:'#d3cdcd',left:'50px',top:'-20px'}}>
                    Please input user name
                  </Text>
            </View>
            <View style={{width:'350px', height:'45px', borderBottomWidth:'1px',borderColor:'#d3cdcd' , alignSelf:'center', top:'140px'}} >
                  <Image source={require('../img/lock35.png')} style={{width: '36px',height:'36px'}}>

                  </Image>
                  <Text style={{fontSize:'18px',fontWeight:'400px',lineHeight:'21.1px', color:'#d3cdcd',left:'50px',top:'-20px'}}>
                  Please input password
                  </Text>
            </View>
            <View style={{width:'350px',height:'48px',backgroundColor:'#386FFC',borderRadius:'10px',top:'200px',alignSelf:'center',justifyContent:'center'}}>
                 <Text style={{fontSize:'18px',fontWeight:'400',alignSelf:'center',color:'#FFFFFF'}}>
                    LOGIN
                 </Text>
            </View>
            <Text style={{fontSize:'18px',fontWeight:'500',top:'220px',left:'20px'}}>
                Register
            </Text>
            <Text style={{fontSize:'18px',fontWeight:'500',top:'196px',left:'235px'}}>
               Forgot Password
            </Text>
            <Text style={{fontSize:'18px',fontWeight:'500',top:'230px',alignSelf:'center'}}>
                Other Login Methods
            </Text>
            <View style={{borderBottomWidth:'1px',borderColor:'#0E18F5', top:'218px',width:'80px',left:'20px'}}></View>
            <View style={{borderBottomWidth:'1px',borderColor:'#0E18F5', top:'218px',width:'80px',left:'290px'}}></View>
      
            <Image
               source={require('../img/AddUser.png')}
               style={{width:'74px',height:'74px',top:'250px',left:'18px'}}
            ></Image>
            <Image
               source={require('../img/Wifi.png')}
               style={{width:'74px',height:'74px',top:'175px',left:'157px'}}
            ></Image>
            <Image
               source={require('../img/Facebook.png')}
               style={{width:'74px',height:'74px',top:'102px',left:'296px'}}
            ></Image>
     </View>
    )};