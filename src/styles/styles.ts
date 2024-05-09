import {StyleSheet} from 'react-native';
import {IColor} from './interfaces';
import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';

export const color: IColor = {
  primary: '#ff6347',
  secondary: '#32cd32',
  background: '#ffffff',
  black: '#000000',
  light: '#f0f0f0',
  blue: '#0b57d0',
  gray: '#808080',
  lightGray: '#d3d3d3',
  warning: '#ff6347',
  error: '#f5060b',
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

export const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: color.primary,
    background: color.gray,
    card: color.black,
    text: color.light,
    border: color.light,
    notification: color.error,
  },
};
export const customDefaultTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: color.primary,
    background: color.light,
    card: color.light,
    text: color.black,
    border: color.black,
    notification: color.error,
  },
};

export const mainStyle = (theme?: Theme) => {
  const {colors} = theme!;
  const {background} = colors;
  return StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    main: {
      flex: 1,
    },
    header: {
      height: 64,
      backgroundColor: background,
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
};
export const postsStyle = (theme?: Theme) => {
  const {colors} = theme!;
  return StyleSheet.create({
    postContainer: {
      padding: 16,
      borderBottomWidth: 1,
      backgroundColor: colors.background,
      borderBottomColor: colors.border,
    },
    postTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.text,
    },
    postText: {
      padding: 10,
      fontSize: 10,
      color: colors.text,
    },
  });
};
