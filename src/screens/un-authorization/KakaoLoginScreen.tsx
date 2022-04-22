import React, {useCallback} from 'react';
import { View, StyleSheet } from "react-native";
import { WebView, WebViewMessageEvent} from 'react-native-webview';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { KAKAO_API_URL, KAKAO_REDIRECT_URL } from '../../api/index';
import kakaoLoginApi from '../../api/auth/kakao';
import { Token } from '../../store/repository/TokenRepository';
import { UnAuthorizationNavigations } from '../../constant/navigation';
import { UnAuthorizationStackParamList } from '../../stack/UnAuthorizationStackNavigator';
import Type from '../../api/domain/type';
import { useSetRecoilState } from 'recoil';
import tokenSelector from '../../store/recoil/token';

export const KakaoLoginScreenOptions: StackNavigationOptions = {};

type navigationProp = NavigationProp<
  UnAuthorizationStackParamList,
  UnAuthorizationNavigations.Kakao
>;

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const KakaoLogin: React.VFC = () => {
  const navigation = useNavigation<navigationProp>();
  const setToken = useSetRecoilState<Token>(tokenSelector);

  const handleOnMessage = useCallback((e: WebViewMessageEvent) => {
    const url = e.nativeEvent['url'];
    if (url.includes(`${KAKAO_REDIRECT_URL}?code=`)) {
      kakaoLoginApi({
        code: url.replace(`${KAKAO_REDIRECT_URL}?code=`, ''),
      }).then((data) => {
        if (data?.isUser) {
          setToken(data.token);
        } else {
          navigation.navigate(UnAuthorizationNavigations.SignUp, {
            ClientId: data.oauth.ClientId,
            Type: Type.KAKAO,
            profileImageUrl: data.oauth.profileImageUrl,
          });
        }
      });
    }
  }, []);

    return (
        <View style={styles.container}>
            <WebView
                originWhitelist={['*']}
                scalesPageToFit={false}
                style={{ marginTop: 30 }}
                source={{ uri:'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=9673bc175438cccc0e91d5440e624b4a&redirect_uri=http://133.186.144.24:3000/api/v1/auth/kakao/redirect'}}
                injectedJavaScript={runFirst}
                javaScriptEnabled={true}
                onMessage={handleOnMessage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
});

export default KakaoLogin;
