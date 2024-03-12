import React from "react";
import TelaCadastro from "./Telas/TelaCadastro";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./Telas/tabs";
import EditarCadastro from "./Telas/EditarCadastro";
import TelaBotaoPanico from "./Telas/TelaBotaoPanico";
import TelaViolentometro from "./Telas/TelaViolentometro";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TelaViolentometro"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="TelaViolentometro" component={TelaViolentometro} />
        <Stack.Screen name="tabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}