import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes/stackNavigation';
import { LoteriaProvider } from './src/contexts';

const App: React.FC = () => {
  return (
    <LoteriaProvider>
      <NavigationContainer>
      <StatusBar style="dark" backgroundColor={"#ffffff"} />
        <Routes/>
      </NavigationContainer>
    </LoteriaProvider>
  );
};

export default App;