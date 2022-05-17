import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import KakaoLogin from "../screens/login/KakaoLoginScreen";
import { ProfileSettingScreen } from "../screens/profile-setting/ProfileSettingScreen";
import {LoginScreen} from "../screens/login/loginButtonScreen";
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

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ cardStyle: { backgroundColor: "#F0DFC1" } }}
    >
      <Stack.Screen
        name="Home"
        component={Root}
        options={{ header: () => false }}
      />
      <Stack.Screen
        name="KakaoLogin"
        component={KakaoLogin}
        options={{ header: () => false }}
      />
      <Stack.Screen name="ProfileSetting" component={ProfileSettingScreen} options={{title:"", headerStyle: {
            backgroundColor: "#F0DFC1"},headerTintColor: '#FF8642', headerTitleStyle: {fontFamily: 'Jua', fontSize:25
            },}}/>
      <Stack.Screen
        name="ParticipateSetting"
        component={ParticipateSettingScreen}
        options={{title:"", headerStyle: {
          backgroundColor: "#F0DFC1"},headerTintColor: '#FF8642', headerTitleStyle: {fontFamily: 'Jua', fontSize:25
          },}}/>
      <Stack.Screen name="LatestSetting" component={LatestSettingScreen} options={{title:"", headerStyle: {
            backgroundColor: "#F0DFC1"},headerTintColor: '#FF8642', headerTitleStyle: {fontFamily: 'Jua', fontSize:25
            },}}/>
      <Stack.Screen name="PushSetting" component={PushAllowScreen} options={{title:"", headerStyle: {
            backgroundColor: "#F0DFC1"},headerTintColor: '#FF8642', headerTitleStyle: {fontFamily: 'Jua', fontSize:25
            },}}/>
      <Stack.Screen name="NoticeSetting" component={NoticeAllowScreen} options={{title:"", headerStyle: {
            backgroundColor: "#F0DFC1"},headerTintColor: '#FF8642', headerTitleStyle: {fontFamily: 'Jua', fontSize:25
            },}}/>
      <Stack.Screen
        name="ConferenceSetting"
        component={ConferenceAllowScreen}
        options={{title:"", headerStyle: {
          backgroundColor: "#F0DFC1"},headerTintColor: '#FF8642', headerTitleStyle: {fontFamily: 'Jua', fontSize:25
          },}}/>
      <Stack.Screen name="FollwerSetting" component={FollowerAllowScreen} options={{title:"", headerStyle: {
            backgroundColor: "#F0DFC1"},headerTintColor: '#FF8642', headerTitleStyle: {fontFamily: 'Jua', fontSize:25
            },}}/>
      <Stack.Screen
        name="FollwerNewSetting"
        component={FollowerNewAllowScreen}
        options={{title:"", headerStyle: {
          backgroundColor: "#F0DFC1"},headerTintColor: '#FF8642', headerTitleStyle: {fontFamily: 'Jua', fontSize:25
          },}}/>
      <Stack.Screen name="ScrapSetting" component={ScrapAllowScreen} options={{title:"", headerStyle: {
            backgroundColor: "#F0DFC1"},headerTintColor: '#FF8642', headerTitleStyle: {fontFamily: 'Jua', fontSize:25
            },}}/>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => false }}
      />
      <Stack.Screen name="ProfileUpdate" component={ProfileUpdateScreen} options={{title:"취소", headerStyle: {
            backgroundColor: "#F0DFC1"},headerTintColor: '#FF8642', headerTitleStyle: {fontFamily: 'Jua',
            },}}/>
    </Stack.Navigator>
  );
}
