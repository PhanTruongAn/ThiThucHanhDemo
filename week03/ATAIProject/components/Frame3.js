import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import * as React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-web';
export default function Frame3(){
    return(
        <View style={styles.container}>
           <Icon name="lock" size={130} style={{alignSelf:'center', marginTop:'90px'}}></Icon>
           <Text style={{fontSize:'25px', fontWeight:'700', lineHeight:'29px',alignSelf:'center',marginTop:'25px'}}>
            FORGET
           </Text>
           <Text style={{fontSize:'25px', fontWeight:'700', lineHeight:'29px',alignSelf:'center'}}>
            PASSWORD
           </Text>
            <Text style={styles.text}>
            Provide your account’s email for which you want to reset your password
           </Text>
           <View style={styles.mail_box}>
               <View style={styles.mail_div}>
                <Icon name="envelope-o" size={25}></Icon>
               </View>
               <Text style={styles.lbl_mail}>
                    Email
                </Text>
           </View>
          <LinearGradient style={styles.background}
            colors={['#c9f3f6','#e3f4f5','#21d1f8']}
            start={[0,0]}
            end={[0,1]}
            >
             <View>
                <Pressable style={styles.button}>
                    <Text style={styles.btn_text}>NEXT</Text>
                </Pressable>
             </View>
          </LinearGradient>
        </View>     
)};

const styles = StyleSheet.create({
    container:{
     flex: 1,
     justifyContent:'center',
     backgroundColor: '#cbf4f6',
     
    },
    
    background:{
        justifyContent:'center',
        width:'100%',
        height: '30%',
        alignContent:''
    },
    button:{
       width: '330px',
       height:'45px',
       alignSelf:'center',
       top: '-50px',
       backgroundColor:'#E3C000',
       justifyContent:'center',
       marginTop: '30px'
    },
    btn_text:{
         fontSize: '18px',
         fontWeight: '700',
         lineHeight: '21px',
         textAlign: 'center',
    },
    mail_box:{
        width: '330px',
        height:'45px',
        alignSelf:'center',
        backgroundColor: '#c4c4c4',
        marginTop: '30px',
    },
    mail_div:{
       width: '48px',
       height: '42px',
       alignItems:'center',
       justifyContent: 'center'
    },
    lbl_mail:{
      fontWeight: '400',
      fontSize: '15px',
      marginLeft: '50px',
      top: '-30px',
    },

    text:{
       width: '330px',
       height: '53px',
       textAlign: 'center',
       fontWeight: '700',
       fontSize: '15px',
       lineHeight: '17.5px',
       alignSelf: 'center',
       marginTop: '30px',
    },
});

