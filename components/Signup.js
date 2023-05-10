import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [birthdate, setBirth] = useState("");
  const [phonenumber, setPhone] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="이메일"
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          secureTextEntry={true}
          value={password}
          placeholder="비밀번호"
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={setPasswordConfirm}
          secureTextEntry={true}
          value={passwordConfirm}
          placeholder="비밀번호 확인"
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="이름"
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={setNumber}
          value={number}
          placeholder="학번"
          keyboardType="numeric"
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={phonenumber}
          placeholder="전화번호"
          keyboardType="numeric"
        />
      </View>

      <View>
        <Button
          title="회원가입"
          onPress={() => Alert.alert("회원 가입이 완료 되었습니다")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "40%",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
  },
});

export default Signup;
