import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './navigation/MainStack';

export const App: FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
