import Sex from "../../api/domain/sex";
import Type from "../../api/domain/type";

interface User {
  Clientid: string;
  name: string;
  profileImageUrl: string;
  sex: Sex;
  Type: Type;
}

export default User;
