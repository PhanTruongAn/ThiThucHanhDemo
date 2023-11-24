import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import * as React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-web';
export default function Frame4(){
    return(
        <View style={styles.container}>
           <Text style={{marginTop:'120px',fontSize:'60px', fontWeight:'700',lineHeight:'70.31px', alignSelf:'center'}}>CODE</Text>
           <Text style={{fontSize:'20px', fontWeight:'700', lineHeight:'23.44px',alignSelf:'center',marginTop:'70px'}}>
            VERIFICATION
           </Text>
            <Text style={styles.text}>
            Enter ontime password sent on ++849092605798
           </Text>
           <View style={styles.phone_box}>
               <View style={styles.box}></View>
               <View style={styles.box}></View>
               <View style={styles.box}></View>
               <View style={styles.box}></View>
               <View style={styles.box}></View>
               <View style={styles.box}></View>
           </View>
          <LinearGradient style={styles.background}
            colors={['#c9f3f6','#e3f4f5','#21d1f8']}
            start={[0,0]}
            end={[0,1]}
            >
             <View>
                <Pressable style={styles.button}>
                    <Text style={styles.btn_text}>VERIFY CODE</Text>
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
       width: '340px',
       height:'50px',
       alignSelf:'center',
       top: '-50px',
       backgroundColor:'#E3C000',
       justifyContent:'center',
       marginTop: '10px'
    },
    btn_text:{
         fontSize: '18px',
         fontWeight: '700',
         lineHeight: '21px',
         textAlign: 'center',
    },
    phone_box:{
        width: '300px',
        height:'50px',
        alignSelf:'center',
        backgroundColor: '#c4c4c4',
        marginTop: '30px',
        flexDirection:'row',
        marginTop: '40px'
    },
    box:{
        width: '50px',
        height:'50px',
        borderWidth: '1px',
        borderColor: '#000000',
     },

    text:{
       width: '330px',
       height: '53px',
       textAlign: 'center',
       fontWeight: '700',
       fontSize: '15px',
       lineHeight: '17.5px',
       alignSelf: 'center',
       marginTop: '60px',
    },

});

