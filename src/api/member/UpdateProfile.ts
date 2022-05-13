import requester from "../../config/axios";

export function UpdateProfile(
  profileImage: string,
  bio: string,
  accessToken: string
) {
  return requester
    .post(
      "/api/v1/member/profile",
      { profileImage, bio },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((res) => {
      return res.data;
    });
}
