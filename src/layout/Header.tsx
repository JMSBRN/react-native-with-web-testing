import React from 'react';
import {View} from 'react-native';
import NavLinks from '../components/NavLinks';

function Header() {
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
    <View>
      <NavLinks links={links} />
    </View>
  );
}

export default Header;
