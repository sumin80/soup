import { atom, selector } from "recoil";
import TokenRepository, { Token } from "../repository/TokenRepository";
import RepositoryKeys from "../../constant/repository";

export const tokenAtom = atom<Token>({
  key: `${RepositoryKeys.TOKEN}-atom`,
  default: null,
});

export const tokenSelector = selector<Token>({
  key: `${RepositoryKeys.TOKEN}-selector`,
  get: ({ get }) => get(tokenAtom),
  set: ({ set }, newValue) => {
    TokenRepository.set(newValue as Token);
    set(tokenAtom, newValue);
  },
});

export default tokenSelector;
