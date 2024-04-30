import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {color} from '../styles/styles';
import useHideElement from '../hooks/useHideElement';
import NavLinks from '../components/NavLinks';
function Header({handleToggleModal}: {handleToggleModal: () => void}) {
  const isNotMobileSize = useHideElement(450);

  return (
    <View style={styles.headerWrapper}>
      {isNotMobileSize ? (
        <View style={styles.container}>
          <View style={styles.logo}>
            <Text style={styles.logoTitle}>Logo</Text>
          </View>
          <NavLinks />
          <View style={styles.authBlock}>
            <Button color={color.secondary} title="Sign Up" />
            <Button color={color.secondary} title="Log In" />
          </View>
        </View>
      ) : (
        <Text style={styles.menuButton} onPress={handleToggleModal}>
          Menu
        </Text>
      )}
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
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  menuButton: {
    textAlign: 'center',
    width: '20%',
    alignSelf: 'flex-start',
    backgroundColor: color.secondary,
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
});
