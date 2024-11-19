import { StyleSheet } from "react-native";

const quinastyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  numbersContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },

  date: {
    fontSize: 16,
    color: "#666",
  },

  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },

  colors:{
    backgroundColor: "#260085",
    color: "#ffffff"
  }
});

export default quinastyles;