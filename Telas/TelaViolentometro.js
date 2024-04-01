import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import config from "../config";

const TelaViolentometro = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstView}></View>
      <View style={styles.secondView}>
        <Ionicons name="arrow-back" size={24} color="black" style={styles.arrowIcon} />
        <Text style={styles.violentometroText}>Violentometro</Text>
      </View>
      <View style={styles.thirdView}>
        <Text style={styles.textosTerceiraView}>É possível estarem em um relacionamento abusivo e não perceber. Acredite, é mais comum do que se imagina! Essa aqui é uma ferramenta que vai te ajudar a reconhecer quando você ou alguém próximo estiver em perigo.</Text>
        <View style={styles.retangularView}>
          <View style={styles.colunaEsquerda}>
            <Text style={styles.textosEsquerdaTopo}>FIQUE ATENTA!</Text>
            <Text style={styles.textosEsquerdaTopo}>A violência está presente. Essas atitudes não são      legais e não vão diminuir!</Text>
          </View>
          <View style={styles.colunaDireita}>
            <Text style={styles.textosEsquerdaBaixo}>Culpar                Ameaçar
Controlar
Proibir
Humilhar em público
Chatangear
Diminuir a autoestima
Ciúmes excessivos
Mentir/enganar</Text>
          </View>
        </View>
        <View style={styles.retangularView2}></View>
        <View style={styles.retangularView3}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  firstView: {
    flex: 0.033,
    backgroundColor: 'black',
  },
  secondView: {
    flex: 0.08,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  thirdView: {
    flex: 0.9,
    backgroundColor: '#C5AFF8',
  },
  arrowIcon: {
    marginRight: 10,
  },
  violentometroText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: config.deviceWidth * 0.24
  },
  textosTerceiraView: {
    textAlign: 'justify',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    fontWeight: 'bold'
  },
  retangularView: {
    height: config.deviceHeight * 0.24,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    marginLeft: config.deviceWidth * 0.05,
    marginRight: config.deviceWidth * 0.05,
    marginTop: config.deviceHeight * 0.02,
    backgroundColor: "#FEB000",
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 6,
    flexDirection: 'row', // Organiza os elementos em linha
  },
  retangularView2: {
    height: config.deviceWidth * 0.4,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    marginLeft: config.deviceWidth * 0.05,
    marginRight: config.deviceWidth * 0.05,
    marginTop: config.deviceHeight * 0.02,
    backgroundColor: "#FE6A00",
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 6,
  },
  retangularView3: {
    height: config.deviceWidth * 0.4,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    marginLeft: config.deviceWidth * 0.05,
    marginRight: config.deviceWidth * 0.05,
    marginTop: config.deviceHeight * 0.02,
    backgroundColor: "#F91B0E",
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 6,
  },
  colunaEsquerda: {
    flex: 1, // Expande para ocupar todo o espaço disponível na coluna
    justifyContent: 'center', // Centraliza verticalmente
    paddingLeft: 20, // Espaçamento à esquerda
  },
  colunaDireita: {
    flex: 1, // Expande para ocupar todo o espaço disponível na coluna
    justifyContent: 'center', // Centraliza verticalmente
    paddingRight: 20, // Espaçamento à direita
  },
  textosEsquerdaTopo: {
    textAlign: 'left',
    fontWeight: 'bold',
  },
  textosEsquerdaBaixo: {
    textAlign: 'left',
    marginTop: 10, // Espaçamento superior
  },
});

export default TelaViolentometro;
