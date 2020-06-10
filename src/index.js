import numRef from "./ref.json";

export const numToWord = (num) => numRef.find((item) => item.num === num)?.word;

export const wordToNum = (word) =>
  numRef.find((item) => item.word === word)?.num;
