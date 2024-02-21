import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import config from '../config';

const TelaBotaoPanico = () => {
  return (
    <View style={styles.container}>
      {/* Primeira View (10% do espaço) */}
      <View style={[styles.view, { flex: 0.1, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }]}>
        <Text style={styles.textLeft}>Acuda mulher</Text>
        <Text style={styles.iconRight}>☰</Text>
      </View>

      {/* Segunda View (20% do espaço) */}
      <View style={[styles.view, { flex: 0.2, flexDirection: 'row', backgroundColor: '#D9D9D9' }]}>
        <View style={styles.customSquare}>
          <Text style={styles.iconText}>Previna-se</Text>
        </View>

        <View style={styles.customSquare}>
          <Text style={styles.iconText}>Área Educacional</Text>
        </View>

        <View style={styles.customSquare}>
          <Text style={styles.iconText}>SEMUDH</Text>
        </View>
      </View>

      {/* Terceira View (Restante) */}
      <View style={[styles.view, { flex: 0.7, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }]}>
        <View style={styles.circleContainer}>
          {}
        </View>

        <View style={styles.circleContainer}>
          {}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLeft: {
    paddingLeft: config.deviceWidth * 0.04,
    paddingTop: config.deviceHeight * 0.02,
    fontSize: 18,
    color: "#6C0DBF"
  },
  iconRight: {
    fontSize: 30,
    marginLeft: 'auto', // Move para a extremidade direita
    marginRight: 10,
  },
  customSquare: {
    width: config.deviceWidth*0.27,
    height: config.deviceHeight*0.14,
    borderWidth: 1.3,
    borderColor: '#6C0DBF',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: "white"

  },
  iconText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: config.deviceHeight*0.08
  },
  circleContainer: {
    width: config.deviceWidth*0.5,
    height: config.deviceHeight*0.2,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: config.deviceHeight*0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIcon: {
    fontSize: 30,
  },
});

export default TelaBotaoPanico;