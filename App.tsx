/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import StackNav from './src/navigation/Stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {cartReducer} from './src/Redux/cartReducer';

function App(): React.JSX.Element {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 5,
    flex: 1,
    backgroundColor: '#c7bba7',
  },
});

export default App;
