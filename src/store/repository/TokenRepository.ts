import Repository from "./repository";
import RepositoryKeys from "../../constant/repository";

export interface Token {
  accessToken: string;
  refreshToken: string;
}

const TokenRepository = new Repository<Token>(RepositoryKeys.TOKEN, null);

export default TokenRepository;
