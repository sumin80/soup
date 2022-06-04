import { atom } from "recoil";

export const profileOpenAtom = atom({
  key: "profileOpen",
  default: "close",
});

export const participateOpenAtom = atom({
  key: "participateOpen",
  default: "close",
});

export const latestOpenAtom = atom({
  key: "latestOpen",
  default: "close",
});
