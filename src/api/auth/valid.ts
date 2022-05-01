import requester from "../../config/axios";

export function IsValidClient(clientId: string, type: string) {
  return requester
    .get(`/api/v1/auth/valid/${type}/${clientId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
    })
    .then((res) => {
      return res.data;
    });
}
