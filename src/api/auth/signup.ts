import requester from "../../config/axios";

export function signUp(
  clientId: string,
  name: string,
  profileImageUrl: string,
  sex: string,
  type: string,
  accessToken: string
) {
  return requester
    .post(
      "/api/v1/auth/new",
      { clientId, name, profileImageUrl, sex, type },
      {
        headers: {
          "Content-Type": "application/json",
          //Authorization: accessToken,
        },
      }
    )
    .then((res) => {
      return res.data;
    });
}
