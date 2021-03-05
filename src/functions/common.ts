export const getNumberFromString = (str: string): number => {
  return Number(str.replace(/\D/g, ""));
};
