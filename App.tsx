import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot} from "recoil";
import StackNavigator from "./src/navigations/stackNavigator";
import { useFonts } from "expo-font";

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
