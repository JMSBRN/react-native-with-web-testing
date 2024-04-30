export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export interface IFontWeight {
  [key: string]: FontWeight;
}

export interface IColor {
  primary: string;
  secondary: string;
  background: string;
  black: string;
  light: string;
  gray: string;
  lightGray: string;
  warning: string;
  error: string;
}
