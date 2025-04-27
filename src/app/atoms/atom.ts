import { atom } from "jotai";

export const genreAtom = atom<string[]>([]);
export const languageAtom = atom<string[]>([]);
export const subtitleAtom = atom<string[]>([]);
export const currentProgressAtom = atom(1);
export const selectedCastAtom = atom<{ image: string; name: string }[]>([]);
