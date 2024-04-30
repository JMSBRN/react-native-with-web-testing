import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from '../styles/styles';

function NavLinks({
  links,
}: {
  links: {name: string; src: string; path: string}[];
}) {
  return (
    <View>
      <FlatList
        data={links}
        renderItem={({item}) => <Text style={styles.link}>{item.name}</Text>}
        keyExtractor={item => item.path}
      />
    </View>
  );
}

export default NavLinks;
