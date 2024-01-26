import { StatusBar } from 'expo-status-bar';
import { Text, Button, StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [locationShown, setLocationShown] = useState(false); // Estado para controlar se a localização foi mostrada

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Please grant location permissions");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log("Location:", currentLocation);
    };

    getPermissions();
  }, []);

  const showLocation = () => {
    if (location) {
      setLocationShown(true); // Define o estado para indicar que a localização foi mostrada
    } else {
      alert("Localização não disponível. Por favor, verifique suas permissões.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Botão para mostrar a localização */}
      <Button title="Localização" onPress={showLocation} />

      {/* Mostra a localização atual do usuário se disponível e se o botão foi clicado */}
      {locationShown && location && (
        <View style={styles.locationContainer}>
          <Text>Latitude: {location.coords.latitude}</Text>
          <Text>Longitude: {location.coords.longitude}</Text>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationContainer: {
    marginTop: 20,
  },
});
