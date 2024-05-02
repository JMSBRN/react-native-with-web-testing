import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import ModalMenu from '../components/ModalMenu';
import Section from '../components/Section';
import root from '../styles/styles';

function Home() {
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

export default Home;
