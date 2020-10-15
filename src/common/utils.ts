export const capitalize = (str: string) => {
  if (str === '') {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
};

export const DATE_FORMAT = 'D MMM YYYY, HH:MM';
