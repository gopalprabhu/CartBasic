import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from '../Components/card';
import {useSelector} from 'react-redux';

const Cart = () => {
  const total = useSelector(state => state.cart);
  return (
    <View style={styles.container}>
      <Text>Total Items{total}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
  },
  cardSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Cart;
