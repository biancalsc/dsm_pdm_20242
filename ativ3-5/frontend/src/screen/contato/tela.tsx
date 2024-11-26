import React from "react";
import { View, Text, Image } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";

import styles from "./styles";

export default function TelaContato({ route, navigation }: any) {
  const { contato } = route.params;

  const latitude = contato.latitude || 0;
  const longitude = contato.longitude || 0;

  const region = {
    latitude,
    longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const handleMarkerPress = () => {
    // Navegar para a tela de atualização de contato
    navigation.navigate("Atualizar Cadastro", { contato }); // Passa os dados do contato
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} showsUserLocation={true} loadingEnabled={true}>
        {/* Utilizando o marcador personalizado */}
        <Marker coordinate={{ latitude, longitude }}>
          <Callout onPress={handleMarkerPress}>
            <View>
              <Text style={{ fontWeight: 'bold' }}>{contato.name}</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}
