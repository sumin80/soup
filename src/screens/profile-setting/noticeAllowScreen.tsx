import React from "react";
import { SafeAreaView } from "react-native";
import { useRecoilState } from "recoil";
import Radio from "../../component/RadioButton";
import { noticeAllowAtom } from "../../store/recoil/PushAlarm";

export function NoticeAllowScreen() {
  const [value5, setValue5] = useRecoilState(noticeAllowAtom);

  return (
    <SafeAreaView>
      <Radio
        label="활성화"
        label2="비활성화"
        value={value5}
        onChange={setValue5}
      />
    </SafeAreaView>
  );
}
