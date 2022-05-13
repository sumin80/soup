import TokenRepository, { Token } from "../../store/repository/TokenRepository";
import requester from "../../config/axios";
import { mutate } from "swr";

interface ReissueApiProps {
  url: string;
  refreshToken: string;
}

const reissue = async ({
  url,
  refreshToken,
}: ReissueApiProps): Promise<Token> => {
  return await requester
    .post("/api/v1/auth/reissue", { refreshToken })
    .then((res) => {
      TokenRepository.set(res.data);
      requester.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.accessToken}`;
      mutate(url);
      return res.data;
    });
};

export default reissue;
