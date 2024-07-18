import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from '../Components/card';
import Home from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../screens/Cart';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({});

export default StackNav;
