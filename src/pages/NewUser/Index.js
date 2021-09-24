import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styles from "../NewUser/style.js";
import firebase from "../../config/firebase.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NewUser({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState("");

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        navigation.navigate("Task", {idUser: user.uid})
        // ...
      })
      .catch((error) => {
        setErrorRegister(true);
        let errorCode = error.code;
        let errorMessage = error.message;
        // ..
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Criar conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Entre com seu E-mail"
        type="Text"
        onChangeText={(text) => setEmail(text)}
        value={email}
      ></TextInput>

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        type="Text"
        onChangeText={(text) => setPassword(text)}
        value={password}
      ></TextInput>

      {errorRegister === true ? (
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbbdb"
          />
          <Text style={styles.warningAlert}>E-mail ou senha incorretos!</Text>
        </View>
      ) : (
        <View />
      )}
      {email === "" || password === "" ? (
        <TouchableOpacity disabled={true} style={styles.buttonRegister}>
          <Text style={styles.textButtonRegister}>Registrar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          disabled={false}
          style={styles.buttonRegister}
          onPress={register}
        >
          <Text style={styles.textButtonRegister}>Registrar</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.login}>
        Você já é registrado?
        <Text
          style={styles.linkLogin}
          onPress={() => navigation.navigate("Login")}
        >Login...</Text>
      </Text>
      <View style = {{height: 100}}/>
    </KeyboardAvoidingView>
  );
}
