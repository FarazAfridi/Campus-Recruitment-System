import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../store/action/auth';

const Home = (props) => {
  const dispatch = useDispatch();
    const userType = useSelector((state) => state.auth.userType);

    console.log(userType)
  return (
    <View>
      <Text>Hello world</Text>
      <Button
        title="Company Login"
        onPress={() =>{
          dispatch(login('username', 'password', 'companies'))
          props.navigation.navigate("Data")
          }}
      />
       <Button
        title="Student Login"
        onPress={() =>{
          dispatch(login('username', 'password', 'students'))
          props.navigation.navigate("Data")
          }}
      />
        <Button
        title="Resume"
        onPress={() => props.navigation.navigate('Resume')}
      />
         <Button
        title="Vacancy"
        onPress={() => props.navigation.navigate('Vacancies')}
      />
    </View>
  );
};

export default Home;
