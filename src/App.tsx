import React, {useState} from 'react';
import StackPages from './routes/StackPages';
import Header from './layout/Header';
import {NavigationContainer} from '@react-navigation/native';
import ErrorPage from './pages/ErrorPage';
import SlideFromLeftModal from './components/SlideFromLeftModal';
import {QueryClient, QueryClientProvider} from 'react-query';
import {customDarkTheme, customDefaultTheme} from './styles/styles';
function App(): React.JSX.Element {
  const client = new QueryClient();
  const [isModalRendered, setIsModalRendered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <QueryClientProvider client={client}>
      <NavigationContainer
        theme={isDarkMode ? customDarkTheme : customDefaultTheme}
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
