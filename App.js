import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator()

function App() {
  return  (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App