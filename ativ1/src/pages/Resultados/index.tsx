import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useLottery } from "../../hooks";
import { resultadosstyles } from "../../themes";

const LotteryResults: React.FC = () => {
  const { resultados, loading, error } = useLottery();

  if (loading) {
    return (
      <View style={resultadosstyles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={resultadosstyles.container}>
        <Text style={resultadosstyles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={resultadosstyles.container}>
      <Text style={resultadosstyles.title}>Lottery Results</Text>

      <View style={resultadosstyles.result}>
        <Text style={resultadosstyles.label}>Mega-Sena:</Text>
        <Text style={resultadosstyles.resultText}>
          {resultados.megasena?.dezenas.join(", ") ?? "N/A"}{" "}
        </Text>
      </View>

      <View style={resultadosstyles.result}>
        <Text style={resultadosstyles.label}>Quina:</Text>
        <Text style={resultadosstyles.resultText}>
          {resultados.quina?.dezenas.join(", ") ?? "N/A"}{" "}
        </Text>
      </View>

      <View style={resultadosstyles.result}>
        <Text style={resultadosstyles.label}>Timemania:</Text>
        <Text style={resultadosstyles.resultText}>
          {resultados.timemania?.dezenas.join(", ") ?? "N/A"}{" "}
        </Text>
      </View>
    </View>
  );
};

export default LotteryResults;