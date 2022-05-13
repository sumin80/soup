import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import KakaoLogin from "../screens/un-authorization/KakaoLoginScreen";
import { ProfileSettingScreen } from "../screens/profile-setting/ProfileSettingScreen";
import LoginScreen from "../screens/loginScreen";
import { Root } from "./bottombar";
import { ParticipateSettingScreen } from "../screens/profile-setting/participateSettingScreen";
import { LatestSettingScreen } from "../screens/profile-setting/LatestSettingScreen";
import { PushAllowScreen } from "../screens/profile-setting/pushAllowScreen";
import { ConferenceAllowScreen } from "../screens/profile-setting/ConferenceSettingScreen";
import { FollowerAllowScreen } from "../screens/profile-setting/followerSettingScreen";
import { FollowerNewAllowScreen } from "../screens/profile-setting/FollowerNewAllowScreen";
import { ScrapAllowScreen } from "../screens/profile-setting/ScrapAllowScreen";
import { NoticeAllowScreen } from "../screens/profile-setting/noticeAllowScreen";
import ProfileUpdateScreen from "../screens/profile-setting/ProfileUpdateScreen";

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ cardStyle: { backgroundColor: "white" } }}
    >
      <Stack.Screen
        name="Home"
        component={Root}
        options={{ header: () => false }}
      />
      <Stack.Screen name="ProfileSetting" component={ProfileSettingScreen} />
      <Stack.Screen
        name="ParticipateSetting"
        component={ParticipateSettingScreen}
      />
      <Stack.Screen name="LatestSetting" component={LatestSettingScreen} />
      <Stack.Screen name="PushSetting" component={PushAllowScreen} />
      <Stack.Screen name="NoticeSetting" component={NoticeAllowScreen} />
      <Stack.Screen
        name="ConferenceSetting"
        component={ConferenceAllowScreen}
      />
      <Stack.Screen name="FollwerSetting" component={FollowerAllowScreen} />
      <Stack.Screen
        name="FollwerNewSetting"
        component={FollowerNewAllowScreen}
      />
      <Stack.Screen name="ScrapSetting" component={ScrapAllowScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => false }}
      />
      <Stack.Screen name="ProfileUpdate" component={ProfileUpdateScreen} />
    </Stack.Navigator>
  );
}
