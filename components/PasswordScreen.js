import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { find_password } from "./Request";
const PasswordScreen = () => {
    const [btntext, setbtn] = useState("확인");
    const [email, setEmail] = useState("");
    const [accredit, setAccredit] = useState("");
    const [isHidden, setIsHidden] = useState(true);
    const handleFindPassword = (email) => {
        find_password(email).then((res) => console.log(res));
    };
    return (
        <View style={styles.container}>
            <Text>비밀번호 찾기</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newtext) => setEmail(newtext)}
                value={email}
                placeholder="이메일 형식에 맞게 입력하세요."
                // 이메일 형식에 맞게 입력 받아야함
                keyboardType="email-address"
            />
            {/* 이메일 인증 되면 hidden 풀기 */}
            <TextInput
                style={isHidden ? { display: "none" } : {}}
                value={accredit}
                onChangeText={(newtext) => setAccredit(newtext)}
                placeholder="인증번호 입력하세요."
            />
            <TouchableOpacity onPress={() => handleFindPassword(email)}>
                <Text style={styles.btn}>확인</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 50,
    },
});
export default PasswordScreen;
