import { IGenre } from "types";
export const getNumberFromString = (str: string): number => {
  return Number(str.replace(/\D/g, ""));
};
export const getRandomInt = (min: number, max: number): number => {
  // 최댓값 포함, 최솟값 포함
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const convertGenres = (genres: IGenre[]): number[] =>
  genres.map((genre) => genre.id);
