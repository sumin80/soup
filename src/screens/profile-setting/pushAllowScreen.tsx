import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { useRecoilState } from "recoil";
import {Radio} from "../../component/RadioButton";
import { pushAllowAtom } from "../../store/recoil/PushAlarm";

export function PushAllowScreen() {
  const [value4, setValue4] = useRecoilState(pushAllowAtom);

  return (
    <SafeAreaView>
      <Text style={styles.title}>프로필 공개 설정</Text>
      <View style={styles.line}></View>
      <Text style={styles.title2}>푸시 알림</Text>
      <Radio
        label="활성화"
        label2="비활성화"
        value={value4}
        onChange={setValue4}
      />
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


