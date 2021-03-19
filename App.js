import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from './screens/Register'
import ListScreen from './screens/List'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Registro"
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Lista"
          component={ListScreen}
       />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
