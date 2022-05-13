import React from "react";
import { SafeAreaView } from "react-native";
import { useRecoilState } from "recoil";
import Radio from "../../component/RadioButton";
import { profileOpenAtom } from "../../store/recoil/ProfileAlarm";

export function ProfileSettingScreen() {
  const [value, setValue] = useRecoilState(profileOpenAtom);

  return (
    <SafeAreaView>
      <Radio label="공개" label2="비공개" value={value} onChange={setValue} />
    </SafeAreaView>
  );
}
