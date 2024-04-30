import {StyleSheet} from 'react-native';
import {IColor} from './interfaces';

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
export const weight: Record<string, any> = {
  light: '100',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  xlBold: '900',
};

const root = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '100%',
    maxWidth: 1440,
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
    margin: 5,
    fontSize: 20,
  },
  image: {
    width: 320,
    height: 240,
  },
});

export default root;
