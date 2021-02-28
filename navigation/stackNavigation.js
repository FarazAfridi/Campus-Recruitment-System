import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './../screens/Home';
import UserData from './../screens/UserData';
import StudentResumes from './../screens/StudentResumes';
import JobVacancies from './../screens/JobVacancies';

const Stack = createStackNavigator();

export function MyStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Data" component={UserData} />
      <Stack.Screen name="Resume" component={StudentResumes} />
      <Stack.Screen name="Vacancies" component={JobVacancies} />
    </Stack.Navigator>
  );
}
