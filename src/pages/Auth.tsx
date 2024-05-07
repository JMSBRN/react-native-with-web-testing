import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Form from '../components/form/Form';
import {Patterns} from '../components/constants';
import {useRoute} from '@react-navigation/native';
import {FormInputs} from '../components/form/interfaces';

const Auth = () => {
  const route = useRoute();

  const formInputs: FormInputs[] = [
    {
      name: 'username',
      placeholder: 'Username',
      pattern: Patterns.username,
    },
    {
      name: 'email',
      placeholder: 'Email',
      pattern: Patterns.email,
    },
    {
      name: 'password',
      placeholder: 'Password',
      secureTextEntry: true,
      pattern: Patterns.password,
    },
  ];

  return (
    <View style={styles.container}>
      <Text>{route.name === 'Register' ? 'Register' : 'Login'}</Text>
      <Form
        inputs={
          route.name === 'Register'
            ? formInputs
            : formInputs.filter(input => input.name !== 'email')
        }
      />
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
