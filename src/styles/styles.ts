import {StyleSheet} from 'react-native';
import {IColor, IFontWeight} from './interfaces';

export const color: IColor = {
  primary: '#ff6347',
  secondary: '#32cd32',
  background: '#ffffff',
  black: '#000000',
  light: '#f0f0f0',
  gray: '#808080',
  lightGray: '#d3d3d3',
  warning: '#ff6347',
  error: '#ff6347',
};
export const size = {
  sm: 12,
  md: 16,
  lg: 32,
  xl: 48,
  xxl: 64,
  xxxl: 96,
};
export const weight: IFontWeight = {
  light: '100',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

const root = StyleSheet.create({
  body: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
  header: {
    height: 64,
    backgroundColor: color.background,
  },
  footer: {
    height: 64,
    backgroundColor: color.black,
  },
  section: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  mainTitle: {
    fontSize: size.md,
    color: color.black,
  },
  subTitle: {
    fontSize: size.md,
    color: color.black,
  },
  paragraph: {
    fontSize: size.md,
    color: color.black,
  },
  link: {
    fontSize: size.md,
    color: color.black,
  },
  image: {
    width: 320,
    height: 240,
  },
});

export default root;
