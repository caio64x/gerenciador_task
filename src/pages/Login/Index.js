import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import firebase from "../../config/firebase.js";
import styles from "../Login/style.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login({ nativation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const loginFirebase = () => {};

  useEffect(() => {}, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Gerenciador de Tasks</Text>

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
        onChangeText={(text) => setSenha(text)}
        value={senha}
      ></TextInput>
      {errorLogin === true ? (
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
      {email === "" || senha === "" ? (
        <TouchableOpacity disabled={true} style={styles.buttonLogin}>
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity disabled={true} style={styles.buttonLogin}>
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.registration}>
        Você ainda não é registrado?
        <Text
          style={styles.linkSubscribe}
          onPress={() => nativation.navigate("NewUser")}
        >Registrar agora...</Text>
      </Text>
      <View style = {{height: 100}}/>
    </KeyboardAvoidingView>
  );
}
