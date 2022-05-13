import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";
import { KAKAO_API_URL, KAKAO_REDIRECT_URL } from "../../api/index";
import { getAccessToken } from "../../api/auth/kakao/kakao";
import { Token } from "../../store/repository/TokenRepository";
import { UnAuthorizationNavigations } from "../../constant/navigation";
import { UnAuthorizationStackParamList } from "../../navigations/UnAuthorizationStackNavigator";
import { useRecoilState } from "recoil";
import tokenSelector from "../../store/recoil/token";
import { userInfo } from "../../api/auth/kakao/user";
import { signUp } from "../../api/auth/signup";
import { signIn } from "../../api/auth/signin";
import { IsValidClient } from "../../api/auth/valid";
import AuthType from "../../api/domain/type";

export const KakaoLoginScreenOptions: StackNavigationOptions = {};

type navigationProp = NavigationProp<
  UnAuthorizationStackParamList,
  UnAuthorizationNavigations.Kakao
>;

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function KakaoLogin() {

  const navigation = useNavigation<navigationProp>();
  const [token, setToken] = useRecoilState(tokenSelector);

  const handleOnMessage = useCallback((e: WebViewMessageEvent) => {
    const url = e.nativeEvent.url;
    if (url.includes(`${KAKAO_REDIRECT_URL}?code=`)) {
      const code = url.replace(`${KAKAO_REDIRECT_URL}?code=`, "");
      getAccessToken(code).then((accessToken) => {
        console.log(accessToken)
        userInfo(accessToken).then((result) => {
          IsValidClient(`${result.id}`, AuthType.KAKAO).then((res) => {
            if (res == true) {
              signIn(`${result.id}`, AuthType.KAKAO).then((res) => {
                setToken(res);
                console.log(res)
                navigation.reset({ index: 0, routes: [{ name: "Home" }] });
              });
            } else
              signUp(
                `${result.id}`,
                result.kakao_account.profile.nickname,
                result.kakao_account.profile.profile_image_url,
                capitalize(result.kakao_account.gender),
                AuthType.KAKAO,
                accessToken
              ).then((res) => {
                setToken(res);
                navigation.reset({ index: 0, routes: [{ name: "Home" }] });
              });
          });
        });
      });
    }
  }, []);


  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        scalesPageToFit={false}
        source={{ uri: KAKAO_API_URL }}
        injectedJavaScript={runFirst}
        javaScriptEnabled={true}
        onMessage={handleOnMessage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KakaoLogin;
