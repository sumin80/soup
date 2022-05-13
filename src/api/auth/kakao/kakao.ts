import {
  KAKAO_CLIENT_ID,
  KAKAO_CLIENT_SECRET,
  KAKAO_REDIRECT_URL,
} from "../..";
import requester from "../../../config/axios";

export function getAccessToken(code: string) {
  return requester
    .post(
      "https://kauth.kakao.com/oauth/token",
      new URLSearchParams({
        code: code,
        grant_type: "authorization_code",
        client_id: KAKAO_CLIENT_ID,
        redirect_uri: KAKAO_REDIRECT_URL,
        client_secret: KAKAO_CLIENT_SECRET,
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    )
    .then((res) => {
      return res.data.access_token;
    })
    .catch((err) => console.log(err.response.data));
}
