import React, { useState } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Button,
    TouchableOpacity,
} from "react-native";
const FindEmail = () => {
    const [email, setEmail] = useState("");
    return (
        <View style={styles.container}>
            <Text>이메일 찾기</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChange={(newtext) => setEmail(newtext)}
                placeholder="학번 입력"
            />
            <TouchableOpacity>
                <Text
                    style={styles.btn}
                    onPress={() => {
                        console.log("클릭!");
                    }}
                >
                    확인
                </Text>
            </TouchableOpacity>
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
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 50,
    },
    btn: {},
});

export default FindEmail;
