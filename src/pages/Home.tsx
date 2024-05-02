import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Text onPress={() => navigation.navigate('About' as never)}>About</Text>
    </View>
  );
}

export default Home;
