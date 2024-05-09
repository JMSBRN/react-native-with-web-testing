import React, {useState} from 'react';
import StackPages from './routes/StackPages';
import Header from './layout/Header';
import {NavigationContainer} from '@react-navigation/native';
import ErrorPage from './pages/ErrorPage';
import SlideFromLeftModal from './components/SlideFromLeftModal';
import {QueryClient, QueryClientProvider} from 'react-query';
import {customDarkTheme, customDefaultTheme} from './styles/styles';
import useAsyncStorage from './hooks/useAsyncStorage';

function App(): React.JSX.Element {
  const client = new QueryClient();
  const [isModalRendered, setIsModalRendered] = useState(false);
  const [theme, setTheme] = useAsyncStorage('theme', 'light');

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <QueryClientProvider client={client}>
      <NavigationContainer
        theme={theme === 'dark' ? customDarkTheme : customDefaultTheme}
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
