import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import usePosts from '../hooks/usePosts';
import {postsStyle} from '../styles/styles';
import {useTheme} from '@react-navigation/native';

const Home: React.FC = () => {
  const {posts, isLoading, isError} = usePosts();
  const theme = useTheme();
  const {postContainer, postTitle, postText} = postsStyle(theme);

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
          <View style={postContainer}>
            <Text style={postTitle}>{item.title}</Text>
            <Text style={postText}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
