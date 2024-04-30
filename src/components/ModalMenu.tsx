import React from 'react';
import {Modal, StyleSheet, Text} from 'react-native';
import {color} from '../styles/styles';
import NavLinks from './NavLinks';
function ModalMenu({
  isRenderedModal,
  handleToggleModal,
}: {
  isRenderedModal: boolean;
  handleToggleModal: () => void;
}) {
  return (
    <>
      {isRenderedModal && (
        <Modal visible={isRenderedModal}>
          <Text style={styles.closeButton} onPress={handleToggleModal}>
            Close
          </Text>
          <NavLinks
            stylesForLinks={styles.stylesForLinks}
            stylesLinksContainer={styles.navLinksContainer}
          />
        </Modal>
      )}
    </>
  );
}

export default ModalMenu;

const styles = StyleSheet.create({
  closeButton: {
    textAlign: 'center',
    width: '20%',
    alignSelf: 'flex-end',
    backgroundColor: color.primary,
    color: 'white',
    padding: 5,
    borderRadius: 5,
    margin: 10,
  },
  navLinksContainer: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    height: 100,
    backgroundColor: color.error,
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
