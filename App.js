import React from 'react';
import { View } from 'react-native';
import { NativeBaseProvider, Text, Box } from 'native-base';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  )
}

export default App;