import requester from "../../config/axios";

export function getMe(accessToken: string) {
  return requester
    .get("/api/v1/member/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      return res.data;
    });
}
