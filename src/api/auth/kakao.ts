import instance from '../../config/axios';
import Type from '../../api/domain/type';
import { Token } from '../../store/repository/TokenRepository';
import User from '../../api/domain/user';

interface KakaoLoginApiProps {
  code: string;
}

interface KakaoLoginApiData {
  isUser: boolean;
  oauth: {
    clientId: string;
    Type: Type;
    profileImageUrl: string;
  };
  token?: Token;
  user?: User;
}

const kakaoLoginApi = async (
  props: KakaoLoginApiProps
): Promise<KakaoLoginApiData> => {
  return await instance.post(`/api/v1/auth/login`, props).then((res) => {
    return res.data;
  });
};

export default kakaoLoginApi;