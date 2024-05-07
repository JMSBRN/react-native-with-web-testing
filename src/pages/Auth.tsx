import React from 'react';
import {View, StyleSheet} from 'react-native';
import Form from '../components/form/Form';

const Auth = () => {
  const formInputs = [
    {
      name: 'username',
      placeholder: 'Username',
    },
    {
      name: 'email',
      placeholder: 'Email',
    },
    {
      name: 'password',
      placeholder: 'Password',
      secureTextEntry: true,
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
