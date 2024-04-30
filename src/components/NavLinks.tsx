import React from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';

function NavLinks({
  stylesLinksContainer,
  stylesForLinks,
}: {
  stylesLinksContainer?: ViewStyle;
  stylesForLinks?: TextStyle;
}) {
  const links = [
    {
      name: 'Home',
      src: 'Home',
      path: '/',
    },
    {
      name: 'About',
      src: 'About',
      path: '/about',
    },
    {
      name: 'Contact',
      src: 'Contact',
      path: '/contact',
    },
    {
      name: 'Login',
      src: 'Login',
      path: '/login',
    },
  ];

  return (
    <View style={styles(stylesLinksContainer).LinksContainer}>
      {links.map(item => (
        <Text style={styles(undefined, stylesForLinks).link} onPress={() => {}}>
          {item.name}
        </Text>
      ))}
    </View>
  );
}

export default NavLinks;

const styles = (stylesLinksContainer?: ViewStyle, stylesForLinks?: TextStyle) =>
  StyleSheet.create({
    LinksContainer: stylesLinksContainer || {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    link: stylesForLinks || {
      marginHorizontal: 13,
      fontSize: 16,
    },
  });
