const API_HOST = "http://133.186.144.24:3000";

export const KAKAO_CLIENT_ID = "9673bc175438cccc0e91d5440e624b4a";
export const KAKAO_REDIRECT_URL =
  `${API_HOST}/api/v1/auth/kakao/redirect`;
export const KAKAO_API_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}`;
export const KAKAO_CLIENT_SECRET = "t6fQLKlEkWHn6ZD6T7APyfj0nGGZgPIC";

export default API_HOST;
