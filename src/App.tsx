import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Header from './layout/Header';
import root from './styles/styles';
import Section from './components/Section';
import ModalMenu from './components/ModalMenu';

function App(): React.JSX.Element {
  const [isRenderedModal, setIsRenderedModal] = useState(false);
  const handleToggleModal = () => {
    setIsRenderedModal(!isRenderedModal);
  };
  return (
    <SafeAreaView style={root.body}>
      <ModalMenu
        isRenderedModal={isRenderedModal}
        handleToggleModal={handleToggleModal}
      />
      <Section>
        <Header handleToggleModal={handleToggleModal} />
      </Section>
    </SafeAreaView>
  );
}

export default App;
