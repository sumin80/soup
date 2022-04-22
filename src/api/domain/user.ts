import Sex from '../../api/domain/sex';
import AccountStatus from '../../api/domain/status';
import Type from '../../api/domain/type';

interface User {
  Clientid: string;
  name: string;
  profileImageUrl: string;
  sex: Sex;
  status: AccountStatus;
  Type: Type;
}

export default User;