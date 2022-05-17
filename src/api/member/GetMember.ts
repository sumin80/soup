import requester from "../../config/axios";

export function GetMember(id: string, accessToken: string) {
  return requester
    .get(`/api/v1/member/profile/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      return res.data;
    });
}
