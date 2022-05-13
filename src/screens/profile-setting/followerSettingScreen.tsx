import React from "react";
import { SafeAreaView } from "react-native";
import { useRecoilState } from "recoil";
import Radio from "../../component/RadioButton";
import { followerAllowAtom } from "../../store/recoil/PushAlarm";

export function FollowerAllowScreen() {
  const [value7, setValue7] = useRecoilState(followerAllowAtom);

  return (
    <SafeAreaView>
      <Radio
        label="활성화"
        label2="비활성화"
        value={value7}
        onChange={setValue7}
      />
    </SafeAreaView>
  );
}
