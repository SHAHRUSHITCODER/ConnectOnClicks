import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Auth } from '../services';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>

      <TextInput
        placeholder='Enter Name'
        onChangeText={(e) => setName(e)}
        style={[styles.textInput]}
      />

      <TextInput
        placeholder='Enter email'
        onChangeText={(e) => setEmail(e)}
        style={[styles.textInput]}
      />

      <TextInput
        placeholder='Enter Password (Preferably 123456)'
        onChangeText={(e) => setPassword(e)}
        style={[styles.textInput]}
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={() => {
        Auth.SignUp(name, email, password)
          .then(() => navigation.navigate('Upload'))
          .catch(error => console.error("Error during signup:", error));
      }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>SignUp</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    color:'#3D6DCC',
    fontSize: 30,
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#E0E0E0',
    color: 'black',
    fontSize: 18,
    width: '80%',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3D6DCC',
    paddingHorizontal: '32%',
    padding:15,
    width: '80%',
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
