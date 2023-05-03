import { Button, StyleSheet, Text, View,TextInput, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';

const Mypage = () => {
    return(
        <View style={styles.container}>
            <View style={styles.info_all}>
                <View style={styles.info_picture}><Text>picture</Text></View>
                <View style={styles.info_info}>
                    <Text style ={styles.info_info_name}>NAME</Text>
                    <Text>학번</Text>
                    <Text>이메일</Text>
                </View>
            </View>
            <View style = {styles.sub_all}>
                <View style={styles.sub_info}><Text>hello</Text></View>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create ({

    container :{
        flex:1,
    },
    info_all :{
        flex :1,
        flexDirection:'column',
    },
    info_picture :{
        flex :1,
        backgroundColor:'red',
    },
    info_info :{
        flex :1,
        alignItems:'center',
        justifyContent:'center',

    },
    info_info_name:{
        fontWeight:'700',
        fontSize:20,
    },
    sub_all :{
        flex:1,
    },
    sub_info :{
        flex:1,
        backgroundColor:'blue',
    },
 

});
export default Mypage;