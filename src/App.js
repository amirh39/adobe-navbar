import React from 'react';
import Header from './components/Header';
import { Provider, darkTheme, Button } from '@adobe/react-spectrum';
import './styles/index.css';

function App() {
  return (
    <Provider theme={darkTheme}>
      <Header />
    </Provider>
  );
}

export default App;
