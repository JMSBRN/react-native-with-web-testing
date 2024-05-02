import React from 'react';
import StackPages from './routes/StackPages';
import Header from './layout/Header';
function App(): React.JSX.Element {
  return (
    <>
      <Header />
      <StackPages />
    </>
  );
}

export default App;
