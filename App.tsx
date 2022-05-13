import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot, useRecoilState } from "recoil";
import MainNavigator from "./src/navigations/mainNavigator";
import StackNavigator from "./src/navigations/stackNavigator";
import { useFonts } from "expo-font";
import tokenSelector from "./src/store/recoil/token";

export default function App() {
  const [loaded] = useFonts({
    Jua: require("./assets/fonts/Jua.ttf"),
    Lemon: require("./assets/fonts/Lemon-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <RecoilRoot>
      <NavigationContainer>
        <StatusBar style="auto" />
        
        <StackNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}
