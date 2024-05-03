import React from 'react';
import {StyleSheet, View} from 'react-native';
import {color} from '../styles/styles';
import NavLinks from './NavLinks';
import MainButton from './MainButton';
function ModalMenu({
  isRenderedModal,
  handleToggleModal,
}: {
  isRenderedModal?: boolean;
  handleToggleModal?: () => void;
}) {
  return (
    <>
      {isRenderedModal && (
        <View style={styles.container}>
          <MainButton
            bgColorProp={color.error}
            title="Close"
            onPress={handleToggleModal!}
          />
          <NavLinks
            stylesForLinks={styles.stylesForLinks}
            stylesLinksContainer={styles.navLinksContainer}
          />
        </View>
      )}
    </>
  );
}

export default ModalMenu;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: 300,
    padding: 20,
    top: 60,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    gap: 20,
    backgroundColor: color.lightGray,
  },
  navLinksContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    height: 100,
    backgroundColor: color.primary,
  },
  stylesForLinks: {
    backgroundColor: color.lightGray,
    color: color.primary,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
  },
});
