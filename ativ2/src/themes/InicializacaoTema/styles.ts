import { StyleSheet } from "react-native";

export const theme = {
  fontSizes: {
    title: 24,
    subtitle: 14,
    text: 16,
  },
  spacing: {
    small: 4,
    medium: 8,
    large: 16,
  },
  colors: {
    primary: "#2d74da",
    white: "#fff",
  },
};

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    borderRadius: 35,
    alignItems: "center",
    width: "40%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: theme.fontSizes.title,
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: theme.spacing.medium,
  },
  subtitle: {
    fontSize: theme.fontSizes.subtitle,
    color: theme.colors.primary,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
},
});
