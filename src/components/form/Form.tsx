import React, {useState} from 'react';
import {View, StyleSheet, Platform, Alert} from 'react-native';
import Input from './Input';
import MainButton from '../MainButton';
import {UserState} from './interfaces';

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
    }
  };

  return (
    <View style={styles.container}>
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
      <MainButton title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Form;
