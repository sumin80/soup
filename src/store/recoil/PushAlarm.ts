import { atom } from "recoil";

export const pushAllowAtom = atom({
  key: "pushAllow",
  default: "close",
});

export const noticeAllowAtom = atom({
  key: "noticeAllow",
  default: "close",
});

export const conferenceAllowAtom = atom({
  key: "conferenceAllow",
  default: "close",
});

export const followerAllowAtom = atom({
  key: "followerAllow",
  default: "close",
});

export const followerNewAllowAtom = atom({
  key: "followerNewAllow",
  default: "close",
});

export const scrapAllowAtom = atom({
  key: "scrapAllow",
  default: "close",
});
