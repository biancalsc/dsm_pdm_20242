import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Alert, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { MapRegion, MarkerPosition } from "../../types";
import styles from "./styles";
import { updateContact } from "../../service/contactService";

export default function TelaCadastro({ navigation, route }: any) {
  const GOOGLE_API_KEY = "AIzaSyDV3OhObrpf_G_zLKdjpwVu7GnXUJyXZiw"; // Substitua por variáveis de ambiente em produção
  const { contato } = route.params;

  const [nome, setNome] = useState(contato?.name || "");
  const [endereco, setEndereco] = useState(contato?.address || "");
  const [longNames, setLongNames] = useState(contato?.address || ""); // Endereço formatado
  const [region, setRegion] = useState<MapRegion | null>(null); // Estado inicial como null
  const [markerPosition, setMarkerPosition] = useState<MarkerPosition | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Inicializa a região e a posição do marcador somente se os dados forem válidos
    if (contato?.latitude && contato?.longitude) {
      setRegion({
        latitude: contato.latitude,
        longitude: contato.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      setMarkerPosition({
        latitude: contato.latitude,
        longitude: contato.longitude,
      });
    } else {
      Alert.alert("Erro", "A localização do contato é inválida.");
      navigation.goBack(); // Volta à tela anterior se os dados forem inválidos
    }
  }, [contato]);

  const salvarContato = async () => {
    if (!nome || !longNames || !markerPosition) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    const contatoAtualizado = {
      id: contato.id,
      name: nome,
      address: longNames,
      latitude: markerPosition.latitude,
      longitude: markerPosition.longitude,
    };

    try {
      await updateContact(contatoAtualizado); // Atualiza o contato
      navigation.navigate("Contatos"); // Retorna à lista de contatos
    } catch (error) {
      Alert.alert("Erro", "Erro ao salvar o contato.");
      console.error("Erro ao salvar contato:", error);
    }
  };

  const buscarCoordenadas = async () => {
    if (!endereco) {
      Alert.alert("Erro", "Endereço não pode estar vazio.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(endereco)}&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      setLoading(false);

      if (data.results.length > 0) {
        const resultado = data.results[0];
        const formattedAddress = resultado.formatted_address;
        setLongNames(formattedAddress); // Endereço formatado
        setEndereco(formattedAddress); // Atualiza o campo de texto

        const location = resultado.geometry.location;
        const latitude = location.lat;
        const longitude = location.lng;

        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
        setMarkerPosition({ latitude, longitude });
      } else {
        Alert.alert("Erro", "Endereço não encontrado!");
      }
    } catch (error) {
      setLoading(false);
      console.error("Erro na requisição:", error);
      Alert.alert("Erro", "Erro ao buscar endereço!");
    }
  };

  const handleMarkerDragEnd = async (e: any) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarkerPosition({ latitude, longitude });
    await buscarEnderecoPorCoordenadas(latitude, longitude);
  };

  const buscarEnderecoPorCoordenadas = async (latitude: number, longitude: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      setLoading(false);

      if (data.results.length > 0) {
        const formattedAddress = data.results[0].formatted_address;
        setLongNames(formattedAddress);
        setEndereco(formattedAddress);
      }
    } catch (error) {
      setLoading(false);
      console.error("Erro na requisição:", error);
      Alert.alert("Erro", "Erro ao buscar o endereço!");
    }
  };

  if (!region || !markerPosition) {
    return <Text>Carregando mapa...</Text>; // Renderiza um placeholder enquanto os dados carregam
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
        onBlur={buscarCoordenadas}
      />
      {longNames ? <Text style={styles.enderecoText}>Endereço: {longNames}</Text> : null}

      <Button title="Salvar" onPress={salvarContato} disabled={loading} />
      {loading && <Text>Carregando...</Text>}

      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        <Marker
          coordinate={markerPosition}
          draggable
          onDragEnd={handleMarkerDragEnd}
        />
      </MapView>
    </View>
  );
}
