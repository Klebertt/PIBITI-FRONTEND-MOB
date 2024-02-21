import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-paper";
import config from "../config";
import url from "../config.json";
import axios from "axios";



import { useNavigation } from '@react-navigation/native';

const EditarCadastro = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dadosCadastro = {
    nome: "",
    email: "",
    senha: "",
    repetirSenha: "",
  };

  const navigation = useNavigation();
  const voltarTelaLogin = () => {
    navigation.goBack() // Navega para a tela de login
    // Ou, se a tela de login estiver na pilha, use navigation.goBack():
    // navigation.goBack();
  };

  async function EditarDados() {
    setIsLoading(true); 

    if (dadosCadastro.senha !== dadosCadastro.repetirSenha) {
      return console.log("senha incorreta");
    }
    await axios
      .post(`${url.urlprod}/auth/cadastro`, {
        nome: dadosCadastro.nome,
        email: dadosCadastro.email,
        senha: dadosCadastro.senha,
      })
      .then((response) => {
        console.log("Registration successful:", response.data);
        navigation.navigate("TelaLogin");
        
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        // You can handle errors and provide user feedback here
      })
      .finally(() => {
        setIsLoading(false); // Define o estado do botão de volta ao normal após a requisição
      });
  }

  
  return (
    
    <View style={stylesEdit.container}>
      <View style={stylesEdit.perfil}>
      <Icon name="close" style={stylesEdit.iconX} />
      <Text style={{color: "#6C0DBF", fontSize: 20}}>Editar Dados</Text>
      <Icon name="user" size={100} color="black" />
      </View>
      {/* </View> */}

      <View
        style={stylesEdit.cadastro}
      >
        <ScrollView contentContainerStyle={stylesEdit.scrollContainer}>
        <Text
          style={{
            fontSize: 20,
            color: "#6C0DBF",
            marginBottom: config.deviceHeight*0.02,
          //backgroundColor: "green",
            marginRight: config.deviceWidth*0.46
          }}
        >
          Dados Pessoais
        </Text>
        <TextInput
          onChangeText={(text) => (dadosCadastro.nome = text)}
          placeholder="Nome *"
          style={stylesEdit.inputs}
        />
        <TextInput
          onChangeText={(text) => (dadosCadastro.email = text)}
          placeholder="Data de nascimento *"
          style={stylesEdit.inputs}
        />

        <TextInput
          onChangeText={(text) => (dadosCadastro.senha = text)}
          placeholder="Telefone *"
          style={stylesEdit.inputs}
        />
        <TextInput
          onChangeText={(text) => (dadosCadastro.repetirSenha = text)}
          placeholder="CPF *"
          style={stylesEdit.inputs}
        />
         <TextInput
          onChangeText={(text) => (dadosCadastro.repetirSenha = text)}
          placeholder="Nome da mãe *"
          style={stylesEdit.inputs}
        />
        <Text
          style={{
            fontSize: 20,
            color: "#6C0DBF",
            marginBottom: config.deviceHeight*0.02,
          //backgroundColor: "green",
            marginRight: config.deviceWidth*0.62
          }}
        >
          Endereço
        </Text>
        <TextInput
          onChangeText={(text) => (dadosCadastro.nome = text)}
          placeholder="Cidade"
          style={stylesEdit.inputs}
        />
        <TextInput
          onChangeText={(text) => (dadosCadastro.email = text)}
          placeholder="Bairro *"
          style={stylesEdit.inputs}
        />
        <TextInput
          onChangeText={(text) => (dadosCadastro.email = text)}
          placeholder="Endereço *"
          style={stylesEdit.inputs}
        />

        <Text
          style={{
            fontSize: 20,
            color: "#6C0DBF",
            marginBottom: config.deviceHeight*0.02,
            marginLeft: config.deviceHeight*0.004,
          //backgroundColor: "green",
          }}
        >
          Motivo do Cadastro
        </Text>
        <TextInput
          onChangeText={(text) => (dadosCadastro.email = text)}
          placeholder="Descrição"
          style={stylesEdit.motivoInput}
        />

        <Button
          style={{
            width: 300,
            height: config.deviceHeight*0.05,
            borderRadius: 4,
            marginBottom: 16,
            backgroundColor: "#6C0DBF",
            alignSelf: "center"
          }}
          mode="contained"
          onPress={() => EditarDados()}
          disabled={isLoading} // Define o botão como inativo se isLoading for true
          loading={isLoading} // Adiciona um indicador de carregamento no botão se isLoading for true
        >
          Editar Dados
        </Button>
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
};

const stylesEdit = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    marginTop: config.deviceHeight * 0.0335,
  },
  inputDefault: {
    backgroundColor: "red",
  },
  perfil: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "gray",
  },
  cadastro: {
    flex: 15,
    backgroundColor: "white",
    alignItems: "center",
  },
  inputs:{
    borderWidth: 1.5,
    borderColor: "#6C0DBF",
    width: config.deviceWidth*0.85,
    height: config.deviceHeight*0.056,
    borderRadius: 4,
    paddingLeft: 9,
    marginBottom: config.deviceHeight*0.02,
  },
  motivoInput: {
    borderWidth: 1.5,
    borderColor: "#6C0DBF",
    width: config.deviceWidth*0.85,
    height: config.deviceHeight*0.13,
    borderRadius: 4,
    paddingLeft: 9,
    marginBottom: config.deviceHeight*0.02,
    textAlignVertical: "top",
  },
  iconX:{
    color: "#000000", 
    fontSize: 20, 
    alignSelf: "flex-end",
    marginRight: config.deviceWidth*0.04
  }
});

export default EditarCadastro;