export const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const omit = (array: string[], omittedKey: string) => {
  return array.filter((key) => key !== omittedKey);
};
