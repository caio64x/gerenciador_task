import Task from "../gerenciador_task/src/pages/Task/Index";
import NewTask from "./src/pages/NewTask/Index";
import Login from "./src/pages/Login/Index";
import NewUser from "./src/pages/NewUser/Index";
import Details from "../gerenciador_task/src/pages/Details/Index";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTintColor: "#F92E6A",
            title: "Login",
          }}
        />
        <Stack.Screen
          name="NewUser"
          component={NewUser}
          options={{
            headerTintColor: "#F92E6A",
            title: "Novo Usuario",
          }}
        />

        <Stack.Screen
          name="New Task"
          component={NewTask}
          options={{
            headerTintColor: "#F92E6A",
            title: "Nova Tarefa",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#F92E6A",
            title: "Detalhes",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
