import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {useDispatch} from 'react-redux';
import {Add, Remove} from '../Redux/cartAction';

const Card = () => {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  const handlePress = () => {
    setIsSelected(!isSelected);
    dispatch(Remove());
  };
  const handlePress2 = () => {
    setIsSelected(!isSelected);
    dispatch(Add());
  };
  return (
    <View style={styles.container}>
      <Text>Product</Text>
      {isSelected ? (
        <View style={[styles.buttonStylesSelected, styles.buttonStyles]}>
          <TouchableWithoutFeedback onPress={handlePress}>
            <Text style={styles.buttonText}>Remove from Cart</Text>
          </TouchableWithoutFeedback>
        </View>
      ) : (
        <View style={[styles.buttonStylesNotSelected, styles.buttonStyles]}>
          <TouchableWithoutFeedback onPress={handlePress2}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fadc89',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 10,
  },
  buttonStyles: {
    padding: 10,
    borderRadius: 20,
    minWidth: 150,
    alignItems: 'center',
  },
  buttonStylesNotSelected: {
    backgroundColor: '#28a9fa',
  },
  buttonStylesSelected: {
    backgroundColor: '#de162a',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
});
export default Card;
