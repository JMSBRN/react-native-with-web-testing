// SlideFromLeftModal.tsx
import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import NavLinks from './NavLinks';
import {color} from '../styles/styles';
import MainButton from './MainButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SlideFromLeftModal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  const slideAnim = useRef(new Animated.Value(-screenWidth)).current;

  const openModal = useCallback(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const closeModal = useCallback(() => {
    Animated.timing(slideAnim, {
      toValue: -screenWidth,
      duration: 300,
      useNativeDriver: true,
    }).start(() => onClose());
  }, [slideAnim, onClose]);

  useEffect(() => {
    if (isVisible) {
      openModal();
    } else {
      closeModal();
    }
  }, [isVisible, closeModal, openModal]);

  return (
    <Animated.View
      style={[
        styles.modalContainer,
        {
          transform: [{translateX: slideAnim}],
        },
      ]}>
      <MainButton
        bgColorProp={color.light}
        colorProp={color.error}
        title="close"
        onPress={closeModal}
      />
      <NavLinks
        onPressLink={closeModal}
        stylesForLinks={styles.link}
        stylesLinksContainer={styles.navLinksContainer}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: screenWidth / 2,
    height: screenHeight,
    padding: 20,
    backgroundColor: color.light,
    zIndex: 100,
    alignItems: 'flex-end',
  },
  navLinksContainer: {
    width: '100%',
    backgroundColor: color.light,
    gap: 20,
  },
  link: {
    color: color.primary,
    fontSize: 30,
  },
});

export default SlideFromLeftModal;
