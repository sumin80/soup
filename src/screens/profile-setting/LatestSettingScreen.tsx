import React from "react";
import { SafeAreaView } from "react-native";
import { useRecoilState } from "recoil";
import Radio from "../../component/RadioButton";
import { latestOpenAtom } from "../../store/recoil/ProfileAlarm";

export function LatestSettingScreen() {
  const [value3, setValue3] = useRecoilState(latestOpenAtom);

  return (
    <SafeAreaView>
      <Radio label="공개" label2="비공개" value={value3} onChange={setValue3} />
    </SafeAreaView>
  );
}
