import React from "react";
import { SafeAreaView } from "react-native";
import { useRecoilState } from "recoil";
import Radio from "../../component/RadioButton";
import { followerNewAllowAtom } from "../../store/recoil/PushAlarm";

export function FollowerNewAllowScreen() {
  const [value8, setValue8] = useRecoilState(followerNewAllowAtom);

  return (
    <SafeAreaView>
      <Radio
        label="활성화"
        label2="비활성화"
        value={value8}
        onChange={setValue8}
      />
    </SafeAreaView>
  );
}
