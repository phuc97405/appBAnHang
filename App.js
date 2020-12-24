import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRouter from './src/routers';

export default function App() {
  return (
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
}
