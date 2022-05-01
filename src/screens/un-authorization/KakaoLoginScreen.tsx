import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";
import { KAKAO_API_URL, KAKAO_REDIRECT_URL } from "../../api/index";
import { getAccessToken } from "../../api/auth/kakao";
import { Token } from "../../store/repository/TokenRepository";
import { UnAuthorizationNavigations } from "../../constant/navigation";
import { UnAuthorizationStackParamList } from "../../stack/UnAuthorizationStackNavigator";
import { useRecoilState } from "recoil";
import tokenSelector from "../../store/recoil/token";
import { userInfo } from "../../api/auth/user";
import { signUp } from "../../api/auth/signup";
import { signIn } from "../../api/auth/signin";
import { IsValidClient } from "../../api/auth/valid";

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
        userInfo(accessToken).then((result) => {
          IsValidClient(`${result.id}`, "Kakao").then((res) => {
            if (res == true) {
              signIn(`${result.id}`, "Kakao").then((res) => {
                setToken(res);
              });
            } else
              signUp(
                `${result.id}`,
                result.kakao_account.profile.nickname,
                result.kakao_account.profile.profile_image_url,
                capitalize(result.kakao_account.gender),
                "Kakao",
                accessToken
              ).then((res) => {
                setToken(res);
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
        style={{ marginTop: 30 }}
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
