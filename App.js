import React from "react";
import TelaCadastro from "./Telas/TelaCadastro";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./Telas/tabs";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TelaCadastro"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="tabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}