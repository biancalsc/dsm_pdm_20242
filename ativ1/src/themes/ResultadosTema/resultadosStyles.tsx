import { StyleSheet } from "react-native";

const resultadosstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  result: {
    marginBottom: 15,
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
  },

  resultText: {
    fontSize: 18,
    color: "green",
  },
  
  error: {
    color: "red",
    fontSize: 18,
  },
});

export default resultadosstyles;