import requester from "../../config/axios";
import AuthType from "../domain/type";

export function signUp(
  clientId: string,
  name: string,
  sex: string,
  type: AuthType,
  accessToken: string,
  profileImageUrl?: string,
) {
  return requester
    .post(
      "/api/v1/auth/new",
      { clientId, name, sex, type, profileImageUrl},
    )
    .then((res) => {
      return res.data;
    });
}
