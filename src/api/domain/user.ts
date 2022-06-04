import Sex from "../../api/domain/sex";
import AuthType from "../../api/domain/type";

interface User {
  clientId: string;
  name: string;
  profileImageUrl?: string;
  sex: Sex;
  Type: AuthType;
}

export default User;
