import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Pressable,
} from 'react-native';
import {color} from '../styles/styles';
import {useNavigation} from '@react-navigation/native';

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
      name: 'Blog',
      src: 'Blog',
      path: '/blog',
    },
  ];
  const [isActive, setIsActive] = useState<string>('Home');
  const navigation = useNavigation();

  return (
    <View style={styles(stylesLinksContainer).LinksContainer}>
      {links.map(item => (
        <Pressable
          key={item.name}
          onPress={() => {
            navigation.navigate(item.name as never);
            setIsActive(item.name);
          }}>
          <Text
            style={[
              styles(undefined, stylesForLinks).link,
              isActive === item.name && styles().activeLink,
            ]}>
            {item.name}
          </Text>
        </Pressable>
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
    activeLink: {
      color: color.light,
    },
  });
