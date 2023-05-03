import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const PasswordScreen = () => {
    const [ btntext, setbtn] = useState('확인');
    const [ email, setEmail] = useState('');
    return (
    <View style={styles.container}>
    <Text>비밀번호 찾기</Text>
    <TextInput 
        style = {styles.input}
        onChangeText={(newtext) => setEmail(newtext)}
        value = {email}
        placeholder='이메일 형식에 맞게 입력하세요.'
        />
        <Button 
            title = {btntext}
          // onPress={(newText) => setbtn(newText)}
          // onpress 할 때 이메일 보내는 걸 해야함 => 공부 필요
        />
    <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    input : {
    height : 40,
    borderWidth: 1,
    padding: 10,
    }
});

export default PasswordScreen; 