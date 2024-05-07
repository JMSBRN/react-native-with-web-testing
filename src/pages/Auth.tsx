import React from 'react';
import {View, StyleSheet} from 'react-native';
import Form from '../components/form/Form';

const Auth = () => {
  const formInputs = [
    {
      name: 'username',
      placeholder: 'Username',
      pattern: /^[a-zA-Z0-9_]{3,}[a-zA-Z]+[0-9]*$/, // Username pattern
    },
    {
      name: 'email',
      placeholder: 'Email',
      pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, // Email pattern
    },
    {
      name: 'password',
      placeholder: 'Password',
      secureTextEntry: true,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, // Password pattern
    },
  ];

  return (
    <View style={styles.container}>
      <Form inputs={formInputs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default Auth;
