import React, {useState} from 'react';
import {View, StyleSheet, Platform, Alert, Text} from 'react-native';
import Input from './Input';
import MainButton from '../MainButton';
import {UserState} from './interfaces';
import {color} from '../../styles/styles';

const Form = ({
  inputs,
}: {
  inputs: {
    name: string;
    placeholder: string;
    secureTextEntry?: boolean;
    pattern: RegExp;
  }[];
}) => {
  const [user, setUser] = useState<UserState>({
    username: '',
    password: '',
    email: '',
  });
  const [errorMessageRendered, setErrorMessageRendered] =
    useState<boolean>(false);
  const handleInputChange = (text: string, name: string) => {
    setUser(prevState => ({
      ...prevState,
      [name]: text,
    }));
  };

  const handleSubmit = () => {
    const allValid = Object.values(user).every(Boolean);
    if (allValid) {
      console.log(user);
      if (Platform.OS === 'android') {
        Alert.alert('Success', JSON.stringify(user));
      }
    } else {
      console.log('error');
      if (Platform.OS === 'android') {
        Alert.alert('Please fill al fields');
      } else {
        setErrorMessageRendered(true);
        setTimeout(() => {
          setErrorMessageRendered(false);
        }, 2000);
      }
    }
  };

  return (
    <View style={styles.container}>
      {errorMessageRendered && (
        <View style={styles.errorMessage}>
          <Text style={styles.errorMessageTitle}>Please fill all fields</Text>
        </View>
      )}
      {inputs.map((input, index) => (
        <Input
          key={index}
          placeholder={input.placeholder}
          value={user[input.name as keyof UserState]}
          onChangeText={text => handleInputChange(text, input.name)}
          secureTextEntry={input.secureTextEntry || false}
          pattern={input.pattern || undefined}
        />
      ))}
      <MainButton
        disabled={errorMessageRendered}
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  errorMessage: {
    position: 'absolute',
    top: -10,
    left: 200,
  },
  errorMessageTitle: {
    fontSize: 15,
    color: color.error,
  },
});

export default Form;
