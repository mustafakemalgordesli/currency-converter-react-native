import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './components/Tabs';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
