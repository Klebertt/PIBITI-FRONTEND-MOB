import React from "react";
import TelaCadastro from "./Telas/TelaCadastro";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./Telas/tabs";
import EditarCadastro from "./Telas/EditarCadastro";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="EditarCadastro"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="EditarCadastro" component={EditarCadastro} />
        <Stack.Screen name="tabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}