import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import {
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  const navigation = useNavigation<any>();

  const handleOnPress = useCallback(
    () => navigation.navigate("KakaoLogin"),
    []
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Soup</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOnPress}
        activeOpacity={1}
      >
        <Image
          source={require("../../assets/kakao_login.png")}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
      <Text style={styles.text}>
        <Text style={styles.white}>함께하는 </Text>
        <Text style={styles.red}>스</Text>
        <Text style={styles.white}>터디 & </Text>
        <Text style={styles.red}>프</Text>
        <Text style={styles.white}>로젝트</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0DFC1",
    alignItems: "center",
  },
  title: {
    color: "#FF8642",
    textAlign: "center",
    fontSize: 50,
    marginTop: 250,
    fontFamily: "Lemon",
  },
  button: {
    width: "100%",
    height: 55,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 30,
    fontSize: 20,
    fontFamily: "Jua",
  },
  red: {
    color: "#FF8642",
  },
  white: {
    color: "#fff",
  },
});
