import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { megasenastyles } from "../../themes";
import { useLottery } from "../../hooks";
import Ball from "../../components/Ball";

const MegaSenaScreen: React.FC = () => {
  const { resultados, loading, error } = useLottery();

  if (loading) {
    return <ActivityIndicator size="large" color="#209869" />;
  }

  if (error) {
    return <Text style={megasenastyles.errorText}>{error}</Text>;
  }

  const megaSenaDezenas = resultados.megasena?.dezenas || [];

  console.log("API data for MegaSena: ", megaSenaDezenas);

  return (
    <View style={megasenastyles.container}>
      <Text style={megasenastyles.title}>MEGA-SENA</Text>
      <View style={megasenastyles.numbersContainer}>
        {megaSenaDezenas.map((num, index) => (
          <Ball
            key={index}
            number={num}
            backgroundColor= {megasenastyles.colors.backgroundColor}
            textColor={megasenastyles.colors.color}
          />
        ))}
      </View>
      <Text style={megasenastyles.date}>
        {resultados.megasena?.dataPorExtenso || "Date not available"}{" "}
      </Text>
    </View>
  );
};

export default MegaSenaScreen;