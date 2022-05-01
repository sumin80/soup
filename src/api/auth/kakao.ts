import { KAKAO_REDIRECT_URL } from "..";
import requester from "../../config/axios";

export function getAccessToken(code: string) {
  return requester
    .post(
      "https://kauth.kakao.com/oauth/token",
      new URLSearchParams({
        code: code,
        grant_type: "authorization_code",
        client_id: "9673bc175438cccc0e91d5440e624b4a",
        redirect_uri: KAKAO_REDIRECT_URL,
        client_secret: "t6fQLKlEkWHn6ZD6T7APyfj0nGGZgPIC",
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
