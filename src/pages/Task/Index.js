import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import firebase from "../../config/firebase.js";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../Task/style.js";
export default function Task({ navigation, route }) {
  const [task, setTask] = useState([]);
  const database = firebase.firestore();

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("Login");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
  function deleteTask(id) {
    database.collection(route.params.idUser).doc(id).delete();
  }

  useEffect(() => {
    database.collection(route.params.idUser).onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTask(list);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={({ item }) => {
          return (
            <View style={styles.Tasks}>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => {
                  deleteTask(item.id);
                }}
              >
                <FontAwesome
                  name="trash"
                  size={23}
                  color="#F92e6A"
                ></FontAwesome>
              </TouchableOpacity>
              <Text
                style={styles.DescriptionTask}
                onPress={() =>
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                    idUser: route.params.idUser,
                  })
                }
              >
                {item.description}
              </Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style
        style={styles.buttonNewTask}
        onPress={() =>
          navigation.navigate("New Task", { idUser: route.params.idUser })
        }
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonLogout}
        onPress={() => {
          logout();
        }}
      >
        <Text style={styles.iconButtonLogout}>
          <MaterialCommunityIcons
            name="location-exit"
            size = {23}
            color="#f92e6a"
          ></MaterialCommunityIcons>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
