import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from '../Components/card';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';

const Home = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Cart');
  };
  return (
    <View style={styles.container}>
      <View style={styles.cardSection}>
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <TouchableWithoutFeedback onPress={handlePress}>
            <Text>Cart Screen</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
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
  button: {
    backgroundColor: '#12b83c',
    borderRadius: 10,
    width: 150,
    alignItems: 'center',
    padding: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 15,
  },
});

export default Home;
