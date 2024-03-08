import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Home = ({ navigation }) => { // <-- Destructure the navigation prop
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={styles.button}>
          <Text>Login</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <View style={styles.button}>
          <Text>SignUp</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  textinput: {
    backgroundColor: 'grey',
    color: 'black',
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
  },
});
