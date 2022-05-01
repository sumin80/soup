import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import {soup-book} from "../assets/soup-book.png"
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>북마크한 내 스프</Text>
      <View style={{ flexDirection: "row", paddingTop: 10 }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={require("../assets/soup-book.png")}
            style={{ width: 75, height: 75, borderRadius: 37.5 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    color: "#FF8642",
    fontWeight: "700",
    marginTop: 50,
    marginLeft: 20,
  },
});
