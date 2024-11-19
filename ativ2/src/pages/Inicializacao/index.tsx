import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {styles} from "../../themes/InicializacaoTema/styles"
import { RootStackParamList } from "../../types/RootStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Inicio"
>;

const Inicio: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => navigation.navigate("Main"), 10000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Main")}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Inicio;