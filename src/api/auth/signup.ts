import instance from '../../config/axios';
import Type from '../../api/domain/type';
import { Token } from '../../store/repository/TokenRepository';
import User from '../../api/domain/user';

interface SignUpApiProps {
  clientId: string,
  name: string,
  profileImageUrl?: string,
  sex: string,
  Type: Type
}

interface SignUpApiData {
  token: Token;
  user: User;
}

const signUpApi = async ({
  clientId,
  name,
  profileImageUrl,
  sex,
  Type,
}: SignUpApiProps): Promise<SignUpApiData> => {
  const data = new FormData();

  data.append('clientId', clientId);
  data.append('name', name);
  data.append('profileImageUrl', profileImageUrl);
  data.append('sex', sex);
  data.append('Type', Type);

  return await instance
    .post(`/api/v1/auth/new`, data, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
    .then((res) => {
      return res.data;
    });
};

export default signUpApi;