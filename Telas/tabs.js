import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaCadastro from "./TelaCadastro";
import {
  Feather,
  EvilIcons,
  Entypo,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import EditarCadastro from "./EditarCadastro";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#029E61",
        taBarInactiveTintColor: "#8F8F8F",
      }}
    >
      <Tab.Screen
        name="TelaCadastro"
        component={TelaCadastro}
        options={{
          tabBarLabel: "Cadastro",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="dollar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="EditarCadastro"
        component={EditarCadastro}
        options={{
          tabBarLabel: "EditarCadastro",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gear" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;