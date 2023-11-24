import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput} from 'react-native';
import * as React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Frame1(){
     
    const [account, setAccount] = React.useState({user:"phanan1234@gmail.com",password:"123"});

    const Login = () =>{
      if(account.user === 'phanan1234@gmail.com' && account.password === '123'){
        alert('Login success!')
    }else{
        alert('login fail!')
      }
    }
    return(
        <View style={styles.container}>
                <LinearGradient
                colors={['#FBCB00','#BF9A00']}
                start={[1,0]}
                end={[0,0.5]}
                style={{height:'100%'}}
                >
                <Text style={{top:'70px',left:'0px',fontWeight:'700', fontSize:'30px', lineHeight:'29.3px'}}>
                     LOGIN
                </Text>
               <View style={styles.name_input}>
                  <Icon
                  name='user' size={37}
                  style={{alignSelf:"center",left:"-30px"}}
                  ></Icon>
                  <View style={{left:"-10px",alignSelf:"center",backgroundColor:"white", width:"250px",height:"45px"}}>
                    <TextInput value={account.user} placeholder='Name' style={{fontSize:"20px",fontWeight:"500",backgroundColor:"#d8b93b",height:"45px"}}>
                       
                    </TextInput>
                  </View>
                </View> 
                
                <View style={styles.pass_input}>
                   <Icon
                     name='lock' size={37}
                     style={{alignSelf:"center",left:"-10px"}}
                  ></Icon>
                  <View style={{left:"7px",alignSelf:"center",backgroundColor:"white", width:"250px",height:"45px"}}>
                    <TextInput value={account.password} placeholder='Password' style={{fontSize:"20px",fontWeight:"500",backgroundColor:"#d8b93b",height:"45px"}}>
                    
                    
                    </TextInput>
                  </View>
                  <Icon
                     name='eye' size={37}
                     style={{alignSelf:"center",left:"15px"}}
                  ></Icon>
                </View>
               
           
                <View style={{width:"360px",height:"45px",alignSelf:"center",backgroundColor:"black",top:"190px",}}>
                   <button onClick={Login}
                   style={{width:"360px",height:"45px",alignItems:"center",backgroundColor:"black",color:"white",fontSize:"20px",fontWeight:"700"}}
                  >LOGIN</button>
                </View>
              
            <Text style={{fontWeight:'700', fontSize:'20px',textAlign:'center', top:'230px'}}>
               Forgot your password?
            </Text>
            
                </LinearGradient>
             
        </View>
)};

const styles = StyleSheet.create({
    container:{
        height:'100%',
        flex: 1,
     
    },
    name_input:{
        flexDirection: "row",
        justifyContent:"center",
        top: '140px',
        width:'360px',
        height:'55px',
        backgroundColor: '#d8b93b',
        left:"15px",
        borderWidth:'1px',
        borderColor:'#e8d897',
        marginTop: '18px',
       
    },

    pass_input:{
        flexDirection: "row",
        justifyContent:"center",
        top: '140px',
        width:'360px',
        height:'55px',
        backgroundColor: '#d8b93b',
        left:"15px",
        borderWidth:'1px',
        borderColor:'#e8d897',
        marginTop: '18px',
    },

});

