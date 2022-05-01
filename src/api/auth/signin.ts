import requester from "../../config/axios";

export function signIn(clientId: string, type: string) {
  return requester
    .post(
      "/api/v1/auth/login",
      { clientId, type },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "",
        },
      }
    )
    .then((res) => {
      return res.data;
    });
}
