import React from "react";
import { SafeAreaView } from "react-native";
import { useRecoilState } from "recoil";
import Radio from "../../component/RadioButton";
import { participateOpenAtom } from "../../store/recoil/ProfileAlarm";

export function ParticipateSettingScreen() {
  const [value2, setValue2] = useRecoilState(participateOpenAtom);

  return (
    <SafeAreaView>
      <Radio label="공개" label2="비공개" value={value2} onChange={setValue2} />
    </SafeAreaView>
  );
}
