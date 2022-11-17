import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main} from '../screens/Main';
import {Screens} from './constants';

const Stack = createNativeStackNavigator();

export const MainStack: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.Main} component={Main} />
    </Stack.Navigator>
  );
};
