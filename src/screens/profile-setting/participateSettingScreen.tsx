import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { useRecoilState } from "recoil";
import {Radio} from "../../component/RadioButton";
import { participateOpenAtom } from "../../store/recoil/ProfileAlarm";

export function ParticipateSettingScreen() {
  const [value2, setValue2] = useRecoilState(participateOpenAtom);

  return (
    <SafeAreaView>
      <Text style={styles.title}>프로필 공개 설정</Text>
      <View style={styles.line}></View>
      <Text style={styles.title2}>참여중인 스프 공개</Text>
      <Radio label="공개" label2="비공개" value={value2} onChange={setValue2} />
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

