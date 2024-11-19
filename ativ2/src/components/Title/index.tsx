// components/NumberCircle.tsx
import { Text } from "react-native";
import styles from "./styles";

interface TituloProps {
    titulo:string;
}

const Title: React.FC<TituloProps> = ({ titulo }) => {
  return <Text style={styles.titulo}>{titulo}</Text>;
};

export default Title;
