import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
    text: "#000000",
  },
};

export const DarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#000000",
    text: "#ffffff",
  },
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
  darkText: {
    color: "white",
  },
});
