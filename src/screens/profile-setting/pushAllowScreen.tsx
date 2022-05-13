import React from "react";
import { SafeAreaView } from "react-native";
import { useRecoilState } from "recoil";
import Radio from "../../component/RadioButton";
import { pushAllowAtom } from "../../store/recoil/PushAlarm";

export function PushAllowScreen() {
  const [value4, setValue4] = useRecoilState(pushAllowAtom);

  return (
    <SafeAreaView>
      <Radio
        label="활성화"
        label2="비활성화"
        value={value4}
        onChange={setValue4}
      />
    </SafeAreaView>
  );
}
