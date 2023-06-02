import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'

import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigations/DrawerNavigator';

const App = () => {
  return (
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})
