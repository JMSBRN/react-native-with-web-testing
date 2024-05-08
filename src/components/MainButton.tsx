import React from 'react';
import {Pressable, StyleSheet, Text, TextStyle} from 'react-native';
import {color, size} from '../styles/styles';

function MainButton({
  colorProp,
  bgColorProp,
  title,
  onPress,
  disabled,
}: {
  title: string;
  colorProp?: TextStyle['color'];
  bgColorProp?: TextStyle['backgroundColor'];
  onPress: () => void;
  disabled?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({pressed}) => {
        return {opacity: pressed ? 0.5 : 1};
      }}>
      <Text style={styles(colorProp, bgColorProp, disabled).menuButton}>
        {title}
      </Text>
    </Pressable>
  );
}

export default MainButton;

const styles = (
  colorProp?: TextStyle['color'],
  bgColorProp?: TextStyle['backgroundColor'],
  disabled?: boolean,
) =>
  StyleSheet.create({
    menuButton: {
      width: 80,
      height: 30,
      textAlign: 'center',
      paddingVertical: 2,
      backgroundColor: bgColorProp || color.blue,
      color: colorProp || 'white',
      borderRadius: 5,
      fontSize: size.md,
      opacity: disabled ? 0.5 : 1,
    },
  });
