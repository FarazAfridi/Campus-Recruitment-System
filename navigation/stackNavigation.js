import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './../screens/Home';
import UserData from './../screens/UserData';
import StudentResumes from './../screens/StudentResumes';
import JobVacancies from './../screens/JobVacancies';
import SignInAndSignUp from './../screens/SignInAndSignUp';
import Login from './../screens/Login';
import SignUp from './../screens/SignUp';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

export function MyStack() {
  const token = useSelector((state) => state.auth.token);
  return (
    <Stack.Navigator>
      {!token ? (
        <>
          <Stack.Screen name="Registration" component={SignInAndSignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Data" component={UserData} />
          <Stack.Screen name="Resume" component={StudentResumes} />
          <Stack.Screen name="Vacancies" component={JobVacancies} />
        </>
      )}
    </Stack.Navigator>
  );
}
