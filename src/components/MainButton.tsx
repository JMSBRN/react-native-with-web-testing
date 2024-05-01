import React from 'react';
import {Pressable, StyleSheet, Text, TextStyle} from 'react-native';
import {color, size} from '../styles/styles';

function MainButton({
  colorProp,
  bgColorProp,
  title,
  onPress,
}: {
  title: string;
  colorProp?: TextStyle['color'];
  bgColorProp?: TextStyle['backgroundColor'];
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => {
        return {opacity: pressed ? 0.5 : 1};
      }}>
      <Text style={styles(colorProp, bgColorProp).menuButton}>{title}</Text>
    </Pressable>
  );
}

export default MainButton;

const styles = (
  colorProp?: TextStyle['color'],
  bgColorProp?: TextStyle['backgroundColor'],
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
    },
  });
