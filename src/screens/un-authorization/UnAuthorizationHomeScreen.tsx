import React from "react";
import { Image, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { StackNavigationOptions } from "@react-navigation/stack";
import KakaoLoginButton from "../kakaoButton";

export const UnAuthorizationHomeScreenOptions: StackNavigationOptions = {};

const UnAuthorizationHomeScreen: React.VFC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>soup</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/kakao_button.png")}
          height={360}
          resizeMode={"contain"}
        />
        <View style={styles.buttonContainer}>
          <KakaoLoginButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0DFC1",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    height: 124,
    bottom: 50,
    paddingHorizontal: 12,
    justifyContent: "space-between",
    backgroundColor: "red",
  },
  title: {
    fontWeight: "600",
    fontSize: 48,
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 360,
  },
});

export default UnAuthorizationHomeScreen;
