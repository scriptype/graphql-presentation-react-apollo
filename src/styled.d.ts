import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      darkGray: string;
      gray: string;
      lightGray: string;
      white: string;
      green: string;
      red: string;
    };
    breakpoints: {
      md: string;
      sm: string;
    };
    background: string;
    contentBackground: string;
    cardBackground: string;
    textColor: string;
    borderRadius: string;
    iconSize: string;
  }
}
