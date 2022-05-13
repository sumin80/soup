import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useRecoilState } from "recoil";
import Radio from "../../component/RadioButton";
import { conferenceAllowAtom } from "../../store/recoil/PushAlarm";

export function ConferenceAllowScreen() {
  const [value6, setValue6] = useRecoilState(conferenceAllowAtom);

  return (
    <SafeAreaView style={styles.radio}>
      <Radio
        label="활성화"
        label2="비활성화"
        value={value6}
        onChange={setValue6}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  radio: {
    backgroundColor: "white",
    flex: 1,
  },
});
