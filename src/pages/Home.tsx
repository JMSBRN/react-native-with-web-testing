import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import usePosts from '../hooks/usePosts';
import {color} from '../styles/styles';

const Home: React.FC = () => {
  const {posts, isLoading, isError} = usePosts();

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (isError) {
    return <Text>Error fetching posts...</Text>;
  }

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postText}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: color.light,
  },
  postTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: color.gray,
  },
  postText: {
    padding: 10,
    fontSize: 10,
    color: color.gray,
  },
});

export default Home;
