import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { quinastyles } from "../../themes";
import { useLottery } from "../../hooks";
import Ball from "../../components/Ball";

const QuinaScreen: React.FC = () => {
  const { resultados, loading, error } = useLottery();

  if (loading) {
    return <ActivityIndicator size="large" color="#209869" />;
  }

  if (error) {
    return <Text style={quinastyles.errorText}>{error}</Text>;
  }

  const quinaNumbers = resultados.quina?.dezenas || [];

  console.log("API data for Quina: ", quinaNumbers);

  return (
    <View style={quinastyles.container}>
      <Text style={quinastyles.title}>QUINA</Text>
      <View style={quinastyles.numbersContainer}>
        {quinaNumbers.map((num, index) => (
          <Ball
            key={index}
            number={num}
            backgroundColor={quinastyles.colors.backgroundColor}
            textColor={quinastyles.colors.color}
          />
        ))}
      </View>
      <Text style={quinastyles.date}>
        {resultados.quina?.dataPorExtenso || "Date not available"}{" "}
      </Text>
    </View>
  );
};

export default QuinaScreen;