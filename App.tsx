import "react-native-gesture-handler";

import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import Routes from "./src/routes";

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
  Jost_300Light
} from "@expo-google-fonts/jost";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
    Jost_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Routes />
  );
}
