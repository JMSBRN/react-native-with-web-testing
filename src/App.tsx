import React, {useState} from 'react';
import StackPages from './routes/StackPages';
import Header from './layout/Header';
import {NavigationContainer} from '@react-navigation/native';
import ErrorPage from './pages/ErrorPage';
import SlideFromLeftModal from './components/SlideFromLeftModal';
import {QueryClient, QueryClientProvider} from 'react-query';
function App(): React.JSX.Element {
  const client = new QueryClient();
  const [isModalRendered, setIsModalRendered] = useState(false);
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer fallback={<ErrorPage />}>
        <Header setModalVisible={setIsModalRendered} />
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
