import requester from "../../../config/axios";

export function userInfo(accessToken: string) {
  return requester
    .post(
      "https://kapi.kakao.com/v2/user/me",
      {
        property_keys: [
          "properties.nickname",
          "properties.profile_image",
          "kakao_account.email",
          "kakao_account.gender",
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    )
    .then((res) => {
      return res.data;
    });
}
