import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Auth from '../pages/Auth';

function StackPages() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="Login" component={Auth} />
      <Stack.Screen name="Register" component={Auth} />
    </Stack.Navigator>
  );
}

export default StackPages;
