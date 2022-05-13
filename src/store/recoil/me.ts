import { atom, selector } from "recoil";

import User from "../../api/domain/user";
import { getMe } from "../../api/member/GetMe";
import { tokenAtom } from "./token";

export const userState = selector({
  key: "currentUser",
  get: async ({ get }) => {
    const token = get(tokenAtom);
    const res = await myInfo(token);
    return res;
  },
});

/**
 * function TestComponet() {
 *    const [myInfo] = useRecoilState(userState)
 *
 *    return (
 *        <View>
 *            <Image source={{ uri: myInfo.profileUrl }}/>
 *        </View>
 *      )
 * }
 *
 *
 */
