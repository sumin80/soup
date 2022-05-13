import React from "react";
import { View, Image } from "react-native";
import { useRecoilState } from "recoil";
import { getMe } from "../api/member/GetMe";

function TestComponent() {
  const [myInfo] = useRecoilState(userState);

  return (
    <View>
      <Image source={{ uri: myInfo.profileImage }} />
    </View>
  );
}
