import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput} from 'react-native';
import * as React from 'react';
import {Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Frame2(){
    return(
        <View style={styles.container}>
            
           <View style={{alignItems:'center',justifyContent:'center',width:"100%",height:"90px"}}>
               <Image source={require('../image/USB.png')} style={{height:'80px',width:'380px'}}>

              </Image>
           </View>
             
           <Text style={{top:"60px",alignSelf:"center",fontSize:"18px",fontWeight:"700"}}>
              Cực kỳ hài lòng
           </Text>
            
            <View style={{justifyContent:"space-between", flexDirection:"row",top:"60px",width:"300px",height:"60px",alignSelf:"center"}}>
              <Icon
                  name="star" size={39}
                  color="#f2dd1b"
                  style={{top:"20px"}}
              ></Icon>
              <Icon
                  name="star" size={39}
                  color="#f2dd1b"
                  style={{top:"20px"}}
              ></Icon>
              <Icon
                  name="star" size={39}
                  color="#f2dd1b"
                  style={{top:"20px"}}
              ></Icon>
              <Icon
                  name="star" size={39}
                  color="#f2dd1b"
                  style={{top:"20px"}}
              ></Icon>
              <Icon
                  name="star" size={39}
                  color="#f2dd1b"
                  style={{top:"20px"}}
              ></Icon>
            </View>
            
            <button style={{borderWidth:"1px",borderColor:"#1511EB",justifyContent:"center",borderRadius:"10px",backgroundColor:"white", width:"330px",height:"70px",alignSelf:"center", marginTop:"90px"}}>
               <Icon
                  name="camera" size={39}
                  color="black"
                  style={{right:"25px"}}
              ></Icon>
              <Text style={{fontSize:"18px",fontWeight:"700", left:"-10px", top:"-5px",textAlign:"center"}}>
                  Thêm hình ảnh
              </Text>
            </button>

            <View style={{borderRadius:"5px",borderWidth:"1px",borderColor:"#dadada",top:"20px", width:"330px", height:"240px", alignSelf:"center"}}>
               <Text style={{fontSize:"18px",padding:"12px",fontWeight:"700",lineHeight:"21.1px"}}>
                 Hãy chi sẻ những điều mà bạn thích về sản phẩm
               </Text>
               <Text style={{top:"140px",padding:"10px",alignSelf:"flex-end",fontSize:"12px",fontWeight:"700",lineHeight:"21.1px",color:"#C4C4C4"}}>
                      https://meet.google.com/nsj-ojwi-xpp
               </Text>

               <View style={{top:"-50px", width:"330px", height:"160px", alignSelf:"center"}}>
                    <TextInput numberOfLines={null} multiline style={{minWidth:300,minHeight:160,fontSize:"20px",fontWeight:"500",height:"160px"}}>

                    </TextInput>
               </View>
            </View>

            <button style={{fontSize:"20px",color:"white",fontWeight:"600",marginTop:"35px",borderWidth:"1px",borderColor:"#1511EB",justifyContent:"center",borderRadius:"7px",backgroundColor:"#0D5DB6", width:"330px",height:"45px",alignSelf:"center"}}>
              Gửi
            </button>
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

