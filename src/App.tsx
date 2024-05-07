import React, {useState} from 'react';
import StackPages from './routes/StackPages';
import Header from './layout/Header';
import {NavigationContainer} from '@react-navigation/native';
import ErrorPage from './pages/ErrorPage';
import SlideFromLeftModal from './components/SlideFromLeftModal';
function App(): React.JSX.Element {
  const [androidModalVisible, setAndroidModalVisible] = useState(false);
  return (
    <NavigationContainer fallback={<ErrorPage />}>
      <Header setAndroidModalVisible={setAndroidModalVisible} />
      <StackPages />
      <SlideFromLeftModal
        isVisible={androidModalVisible}
        onClose={() => setAndroidModalVisible(false)}
      />
    </NavigationContainer>
  );
}

export default App;
