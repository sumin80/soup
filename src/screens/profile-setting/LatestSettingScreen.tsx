import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { useRecoilState } from "recoil";
import {Radio} from "../../component/RadioButton";
import { latestOpenAtom } from "../../store/recoil/ProfileAlarm";

export function LatestSettingScreen() {
  const [value3, setValue3] = useRecoilState(latestOpenAtom);

  return (
    <SafeAreaView>
      <Text style={styles.title}>프로필 공개 설정</Text>
      <View style={styles.line}></View>
      <Text style={styles.title2}>최신 작성한 스프 공개</Text>
      <Radio label="공개" label2="비공개" value={value3} onChange={setValue3}  />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: "#FF8642",
    marginLeft: 20,
    marginTop: 10,
    fontFamily: "Jua",
  },
  title2:{
    fontSize: 20,
    color: "#FF8642",
    marginLeft: 20,
    marginTop: 10,
    fontFamily: "Jua",
  },
  line: {
    height: 3,
    backgroundColor: "#FF8642",
    width: "85%",
    margin: 10,
    alignSelf: "center",
  },
});
