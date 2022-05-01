import { atom } from "recoil";

import User from "../../api/domain/user";

const meAtom = atom<User | null>({
  key: `me-atom`,
  default: null,
});

export default meAtom;
