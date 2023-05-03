import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,Button } from 'react-native';
import React,{useState} from 'react';

const backgroundImage = require('../assets/ORA.jpg');
const Login = () => {
    return(   
        <View style ={styles.box}>
            <Image 
                source = {backgroundImage}
                style={styles.backgroundImage}
            />
            <View >
                <Text style= {styles.text}>Login</Text>
            </View>
            <View style = {styles.login_box}>
                <TextInput
                style={styles.input}
                // value ={email}  //현재 값 설정 
                placeholder="Email"  //hint 
                placeholderTextColor="white"
                // onChangeText ={setEmail}  //사용자가 입력한 값 실시간으로 처리
                keyboardType="email-address" 
                autoCapitalize="none" 
                />
                <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="white"
                // value={password}
                // onChangeText={setPassword}
                secureTextEntry
                />
                <Button title="sign up" />
            </View>
           
        </View>
    );
}


const styles = StyleSheet.create ({

    box :{
        flex:1,
        alignItems:'center',
        justifyContent :'center',
    },

    login_box : {
        width :'100%',
        alignItems:'center',
        justifyContent :'center',
    },
    text :{
        fontSize :25,
        fontWeight :'800',
        color : 'white',
    },
    backgroundImage :{
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity:0.7,
    },
    input :{
        width:'80%',
        borderWidth:2,
        borderColor:'white',
        borderRadius :30,
        padding :15,
        margin:10,
    },
 

});
export default Login;