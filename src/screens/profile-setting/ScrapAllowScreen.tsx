import React from "react";
import { SafeAreaView } from "react-native";
import { useRecoilState } from "recoil";
import Radio from "../../component/RadioButton";
import { scrapAllowAtom } from "../../store/recoil/PushAlarm";

export function ScrapAllowScreen() {
  const [value9, setValue9] = useRecoilState(scrapAllowAtom);

  return (
    <SafeAreaView>
      <Radio
        label="활성화"
        label2="비활성화"
        value={value9}
        onChange={setValue9}
      />
    </SafeAreaView>
  );
}
