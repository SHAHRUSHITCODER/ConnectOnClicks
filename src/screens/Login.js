import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Auth } from "../services";
import SignUp from './SignUp';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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

      <TouchableOpacity onPress={() => Auth.signIn(email, password, navigation)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate(SignUp)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>SignUp</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    color:'#3D6DCC',
    fontSize: 24,
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#E0E0E0',
    color: 'black',
    fontSize: 18,
    width: '80%',
    padding: 15, // Increased padding for text input
    marginBottom: 20,
    borderRadius: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3D6DCC',
    paddingHorizontal:'30%',
    paddingVertical:15, // Increased padding for the button
    width: '80%',
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
