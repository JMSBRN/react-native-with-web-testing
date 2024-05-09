import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {color} from '../styles/styles';
import useHideElement from '../hooks/useHideElement';
import NavLinks from '../components/NavLinks';
import MainButton from '../components/MainButton';
import {Theme, useNavigation, useTheme} from '@react-navigation/native';
function Header({
  setModalVisible,
  handleToggleTheme,
}: {
  setModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggleTheme: () => void;
}) {
  const isNotMobileSize = useHideElement(650);
  const navigation = useNavigation();
  const platform = Platform.OS;
  const isDescTopSize = isNotMobileSize && platform !== 'android';
  const theme = useTheme();
  const handleToggleModal = () => {
    if (setModalVisible) {
      setModalVisible(true);
    }
  };
  const handleNavigate = (pathName: never) => {
    navigation.navigate(pathName);
  };
  const {headerWrapper, container, logo, logoTitle, authBlock} =
    stylesTheme(theme);

  return (
    <View style={headerWrapper}>
      <View style={container}>
        {!isNotMobileSize && (
          <>
            <MainButton
              onPress={handleToggleModal}
              bgColorProp={color.secondary}
              title="Menu"
            />
            <MainButton
              onPress={handleToggleTheme}
              bgColorProp={color.blue}
              title="theme"
            />
          </>
        )}
        {isDescTopSize && (
          <>
            <View style={logo}>
              <Text style={logoTitle}>Logo</Text>
            </View>
            <NavLinks />
          </>
        )}
        <View style={authBlock}>
          <MainButton
            onPress={() => handleNavigate('Login' as never)}
            title="Log In"
          />
          <MainButton
            onPress={() => handleNavigate('Register' as never)}
            title="Sign Up"
          />
        </View>
      </View>
    </View>
  );
}

export default Header;
const stylesTheme = (theme: Theme) => {
  const {colors} = theme;
  return StyleSheet.create({
    headerWrapper: {
      width: '100%',
      height: 64,
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    container: {
      paddingHorizontal: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      width: 50,
      height: 50,
      backgroundColor: colors.card,
      borderRadius: 50,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoTitle: {
      color: color.light,
    },
    flatListContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    link: {
      marginHorizontal: 13,
      fontSize: 16,
    },
    authBlock: {
      flexDirection: 'row',
      columnGap: 20,
    },
  });
};
