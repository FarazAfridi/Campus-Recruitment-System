import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const SignInAndSignUp = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          color="#152131"
          title="Company Sign Up"
          onPress={() => {
            props.navigation.navigate('SignUp', {
              text: 'COMPANY SIGN UP',
              buttonText: 'Sign Up',
              userType: 'companies',
            });
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#152131"
          title="Company Login"
          onPress={() => {
            props.navigation.navigate('Login', {
              text: 'COMPANY LOGIN',
              buttonText: 'Login',
              userType: 'companies',
            });
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#152131"
          title="Student Sign Up"
          onPress={() => {
            props.navigation.navigate('SignUp', {
              text: 'STUDENT SIGN UP',
              buttonText: 'Sign Up',
              userType: 'students',
            });
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#152131"
          title="Student Login"
          onPress={() => {
            props.navigation.navigate('Login', {
              text: 'STUDENT LOGIN',
              buttonText: 'Login',
              userType: 'students',
            });
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#152131"
          title="Admin Sign Up"
          onPress={() => {
            props.navigation.navigate('SignUp', {
              text: 'ADMIN LOGIN',
              buttonText: 'Sign Up',
              userType: 'admin',
            });
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#152131"
          title="Admin Login"
          onPress={() => {
            props.navigation.navigate('Login', {
              text: 'ADMIN LOGIN',
              buttonText: 'Login',
              userType: 'admin',
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: '#7395AE'
  },
  button: {
    margin: 3,
    padding: 5,
  },
});

export default SignInAndSignUp;
