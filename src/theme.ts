import { DefaultTheme } from 'styled-components';

const colors = {
  black: '#222222',
  darkGray: '#5f5f5f',
  gray: '#d4d9de',
  lightGray: '#f2f2f2',
  white: '#ffffff',
  green: '#60ca46',
  red: '#ca4646',
};

const breakpoints = {
  md: '720px',
  sm: '480px',
};

const theme: DefaultTheme = {
  colors,
  breakpoints,

  background: colors.gray,
  contentBackground: colors.lightGray,
  cardBackground: colors.white,
  textColor: colors.black,
  borderRadius: '8px',
  iconSize: '16px',
};

export default theme;
