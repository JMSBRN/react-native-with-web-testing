import {useQuery, useMutation} from 'react-query';
import api from '../api/postsApi';
import {Post} from './interfaces';
import {useEffect, useState} from 'react';

const fetchPosts = async () => {
  const response = await api.get('/posts');
  return response.data as Post[];
};

const createPost = async (post: Post) => {
  const response = await api.post('/posts', post);
  return response.data as Post;
};

const deletePost = async (id: number) => {
  await api.delete(`/posts/${id}`);
};

const usePosts = () => {
  const {data, isLoading, isError} = useQuery<Post[]>('posts', fetchPosts);
  const createPostMutation = useMutation(createPost);
  const deletePostMutation = useMutation(deletePost);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  const addPost = async (post: Post) => {
    const newPost = await createPostMutation.mutateAsync(post);
    setPosts(prevPosts => [...prevPosts, newPost]);
  };

  const removePost = (id: number) => {
    deletePostMutation.mutateAsync(id);
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  return {
    posts,
    isLoading,
    isError,
    addPost,
    removePost,
  };
};

export default usePosts;
