import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {color} from '../styles/styles';
import useHideElement from '../hooks/useHideElement';
import NavLinks from '../components/NavLinks';
import MainButton from '../components/MainButton';
import ModalMenu from '../components/ModalMenu';
import {useNavigation} from '@react-navigation/native';
function Header({
  setAndroidModalVisible,
}: {
  setAndroidModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isRenderedModal, setIsRenderedModal] = useState(false);
  const isNotMobileSize = useHideElement(650);
  const navigation = useNavigation();
  const platform = Platform.OS;
  const isDescTopSize = isNotMobileSize && platform !== 'android';
  const handleToggleModal = () => {
    if (platform === 'web') {
      setIsRenderedModal(!isRenderedModal);
    }
    if (setAndroidModalVisible && platform === 'android') {
      setAndroidModalVisible(true);
    }
  };
  const handleNavigate = (pathName: never) => {
    navigation.navigate(pathName);
  };

  return (
    <View style={styles.headerWrapper}>
      <ModalMenu
        isRenderedModal={isRenderedModal}
        handleToggleModal={handleToggleModal}
      />
      <View style={styles.container}>
        {!isNotMobileSize && (
          <MainButton
            onPress={handleToggleModal}
            bgColorProp={color.secondary}
            title="Menu"
          />
        )}
        {isDescTopSize && (
          <>
            <View style={styles.logo}>
              <Text style={styles.logoTitle}>Logo</Text>
            </View>
            <NavLinks />
          </>
        )}
        <View style={styles.authBlock}>
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

const styles = StyleSheet.create({
  headerWrapper: {
    width: '100%',
    height: 64,
    backgroundColor: color.primary,
    justifyContent: 'center',
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
    backgroundColor: color.gray,
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
