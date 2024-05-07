import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  pattern?: RegExp;
  onError?: (error: boolean) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  pattern,
  onError,
}) => {
  const [error, setError] = useState(false);

  const handleTextChange = (text: string) => {
    if (pattern && !pattern.test(text)) {
      // If there's a pattern and the text doesn't match, set an error
      setError(true);
      // If an onError callback is provided, call it with true to indicate an error
      if (onError) onError(true);
    } else {
      // If the text matches the pattern or there's no pattern, clear the error
      setError(false);
      // If an onError callback is provided, call it with false to indicate no error
      if (onError) onError(false);
    }
    onChangeText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={handleTextChange}
        secureTextEntry={secureTextEntry}
        style={[styles.input, error && styles.errorInput]}
      />
      {error && <Text style={styles.errorText}>Invalid input</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    marginTop: 5,
    color: 'red',
    fontSize: 12,
  },
});

export default Input;
