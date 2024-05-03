import React from 'react';
import StackPages from './routes/StackPages';
import Header from './layout/Header';
import {NavigationContainer} from '@react-navigation/native';
import ErrorPage from './pages/ErrorPage';
function App(): React.JSX.Element {
  return (
    <NavigationContainer fallback={<ErrorPage />}>
      <Header />
      <StackPages />
    </NavigationContainer>
  );
}

export default App;
