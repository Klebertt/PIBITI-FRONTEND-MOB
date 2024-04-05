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
            <Text style={styles.textosEsquerda}>FIQUE ATENTA!</Text>
            <Text style={styles.textosEsquerda}>A violência está presente. Essas atitudes não são</Text>
            <Text style={styles.textosEsquerda}>legais e não vão diminuir!</Text>
          </View>
          <View style={styles.colunaDireita}>
  <Text style={styles.textosColunaDireita}>Culpar</Text>
  <Text style={styles.textosColunaDireita}>Ameaçar</Text>
  <Text style={styles.textosColunaDireita}>Controlar</Text>
  <Text style={styles.textosColunaDireita}>Proibir</Text>
  <Text style={styles.textosColunaDireita}>Humilhar em público</Text>
  <Text style={styles.textosColunaDireita}>Chatangear</Text>
  <Text style={styles.textosColunaDireita}>Diminuir a autoestima</Text>
  <Text style={styles.textosColunaDireita}>Ciúmes excessivos</Text>
  <Text style={styles.textosColunaDireita}>Mentir/enganar</Text>
</View>
        </View>
        <View style={styles.retangularView2}>
          <View style={styles.colunaEsquerda}>
            <Text style={styles.textosEsquerda}>REAJA!</Text>
            <Text style={styles.textosEsquerda}>Busque ajuda</Text>
            <Text style={styles.textosEsquerda}>antes que seja</Text>
            <Text style={styles.textosEsquerda}>tarde demais!</Text>
          </View>
          <View style={styles.colunaDireita}>
  <Text style={styles.textosColunaDireita2}>Xingar</Text>
  <Text style={styles.textosColunaDireita2}>Destruir objetos pessoais</Text>
  <Text style={styles.textosColunaDireita2}>Empurrar</Text>
  <Text style={styles.textosColunaDireita2}>Chutar</Text>
  <Text style={styles.textosColunaDireita2}>Arranhar</Text>
  <Text style={styles.textosColunaDireita2}>"Brincar" de bater</Text>
</View></View>
        <View style={styles.retangularView3}><View style={styles.colunaEsquerda}>
            <Text style={styles.textosEsquerda}>REAJA!</Text>
            <Text style={styles.textosEsquerda}>Sua vida corre </Text>
            <Text style={styles.textosEsquerda}>perigo, busque</Text>
            <Text style={styles.textosEsquerda}>ajuda </Text>
            <Text style={styles.textosEsquerda}>imediatamente!</Text>
          </View>
          <View style={styles.colunaDireita}>
  <Text style={styles.textosColunaDireita3} numberOfLines={1}>Manter em cárcere privado</Text>
  <Text style={styles.textosColunaDireita3}>Ameaçar de morte</Text>
  <Text style={styles.textosColunaDireita3}>Violentar sexualmente</Text>
  <Text style={styles.textosColunaDireita3}>Mutilar</Text>
  <Text style={styles.textosColunaDireita3}>Estrangular</Text>
  <Text style={styles.textosColunaDireita3}>Causar lesão corporal grave</Text>
</View></View>
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
    flexDirection: 'row',
  },
  retangularView2: {
    height: config.deviceHeight * 0.20,
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
    flexDirection: 'row',
  },
  retangularView3: {
    height: config.deviceHeight * 0.20,
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
    flexDirection: 'row',
  },
  colunaEsquerda: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  colunaDireita: {
    flex: 1,
    marginBottom: 1,
    paddingRight: 20,


  },
  textosEsquerda: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginRight: 10
  },
  textosColunaDireita: {
    textAlign: 'left',
    marginBottom: 1,
    fontWeight: '600'
  },
  textosColunaDireita2: {
    textAlign: 'left',
    marginTop: config.deviceHeight*0.002,
    fontWeight: '600'
  },
  textosColunaDireita3: {
    textAlign: 'left',
    marginTop: config.deviceHeight*0.002,
    fontWeight: '600',
    fontSize: config.deviceWidth*0.033,
  },
});

export default TelaViolentometro;
