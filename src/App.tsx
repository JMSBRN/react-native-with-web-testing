import React, {useState} from 'react';
import StackPages from './routes/StackPages';
import Header from './layout/Header';
import {
  NavigationContainer,
  Theme,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import ErrorPage from './pages/ErrorPage';
import SlideFromLeftModal from './components/SlideFromLeftModal';
import {QueryClient, QueryClientProvider} from 'react-query';
import {color} from './styles/styles';
function App(): React.JSX.Element {
  const client = new QueryClient();
  const [isModalRendered, setIsModalRendered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const customDarkTheme: Theme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: color.primary,
      background: color.black,
      card: color.black,
      text: color.light,
      border: color.light,
      notification: color.error,
    },
  };
  const customDefaultTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: color.primary,
      background: color.error,
      card: color.light,
      text: color.black,
      border: color.black,
      notification: color.error,
    },
  };

  return (
    <QueryClientProvider client={client}>
      <NavigationContainer
        theme={customDefaultTheme}
        fallback={<ErrorPage />}>
        <Header
          handleToggleTheme={handleToggleTheme}
          setModalVisible={setIsModalRendered}
        />
        <StackPages />
        <SlideFromLeftModal
          isVisible={isModalRendered}
          onClose={() => setIsModalRendered(false)}
        />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
