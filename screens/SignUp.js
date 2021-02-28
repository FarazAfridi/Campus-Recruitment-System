import React, {useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {signup} from './../store/action/auth';

const SignUp = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {text, buttonText, userType} = route.params;
  console.log(email, password);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
      />
      <View style={styles.button}>
        <Button
          color="#152131"
          title={buttonText}
          onPress={() => {
            dispatch(signup(email, password, userType));
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7395AE',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop: 5,
  },
  input: {
    padding: 10,
    marginBottom: 10,
  },
  button: {
    padding: 10,
  },
});

export default SignUp;
