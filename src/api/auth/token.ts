import requester from "../../config/axios";

export function tokenInfo(accessToken: string) {
  return requester
    .get("/api/v1/auth/token/info", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
    })
    .then((res) => {
      return res.data;
    });
}
