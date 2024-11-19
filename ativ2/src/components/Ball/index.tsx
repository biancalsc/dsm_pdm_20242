import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface BallProps {
  number: string;
  backgroundColor: string;
  textColor: string;
}

const Ball: React.FC<BallProps> = ({ number, backgroundColor, textColor }) => {
  return (
    <View style={[styles.circulo, { backgroundColor }]}>
      <Text style={[styles.texto, { color: textColor }]}>{number}</Text>
    </View>
  );
};

export default Ball;
