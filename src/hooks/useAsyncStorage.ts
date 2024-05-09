import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorage = (key: string, defaultValue: any) => {
  const [storageValue, setStorageValue] = useState(defaultValue);

  useEffect(() => {
    (async () => {
      let value = defaultValue;
      try {
        const storedValue = await AsyncStorage.getItem(key);

        if (storedValue !== null) {
          value = JSON.parse(storedValue);
        }
        setStorageValue(value);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [key, defaultValue]);

  useEffect(() => {
    (async () => {
      try {
        const valueJSON = JSON.stringify(storageValue);
        await AsyncStorage.setItem(key, valueJSON);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [storageValue, key]);

  return [storageValue, setStorageValue];
};

export default useAsyncStorage;
