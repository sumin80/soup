import requester from "../../config/axios";
import AuthType from "../domain/type";

export function signUp(
  clientId: string,
  name: string,
  profileImageUrl?: string,
  sex: string,
  type: AuthType,
  accessToken: string
) {
  return requester
    .post(
      "/api/v1/auth/new",
      { clientId, name, profileImageUrl, sex, type },
      
    )
    .then((res) => {
      return res.data;
    });
}
