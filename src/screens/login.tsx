import React from 'react';
import { View, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';
import axios from 'axios';

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const KakaoLogin = ({navigation}: any) => {
    function LogInProgress(data: any) {
        const exp = "code=";
        var condition = data.indexOf(exp);
        if (condition != -1) {
            var request_code = data.substring(condition + exp.length);
            console.log("access code :: " + request_code);
            requestToken(request_code);
        }
    };

    async function requestToken(request_code : any){
        var returnValue = "none";
        var request_token_url = 'http://133.186.144.24:8888/api/v1/auth/token/info'; 
        var code = 'TFRKHHbGomwJcWSXqukdPDlf8f0L4dpW46Ob0rRpGT1sQWYYVJSuuxWP53qrUlSU6mfosAorDKgAAAGAK6ApIg';
        await axios.post(request_token_url, {
            params:{
              grant_type : 'authorization_Code',
              client_id : 'ic',
              redirect_uri : 'url',
              code: 'request_code',
            },
          }).then(async function (response){
              var token_json = response["data"];
              var access_token = token_json["access_token"];
              var expires_in = token_json["expires_in"];
              var refresh_token = token_json["refresh_token"];
              var refresh_token_expires_in = token_json["refresh_token_expires_in"];
              var scope = token_json["scope"];
              var token_type = token_json["token_type"];
              
              returnValue = access_token;   
          }).catch(function(error){
              console.log(error);
          })
        return returnValue;
    }

    return (
        <View style={styles.container}>
            <WebView
                originWhitelist={['*']}
                scalesPageToFit={false}
                style={{ marginTop: 30 }}
                source={{ uri:'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=9673bc175438cccc0e91d5440e624b4a&redirect_uri=http://133.186.144.24:3000/api/v1/auth/kakao/redirect'}}
                injectedJavaScript={runFirst}
                javaScriptEnabled={true}
                onMessage={(event) => { LogInProgress(event.nativeEvent["url"]); }}
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
