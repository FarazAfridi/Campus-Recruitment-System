import React, {useEffect} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { fetchVacancy, fetchResume } from './../store/action/userAction';

const Home = (props) => {
  const dispatch = useDispatch();

  const userType = useSelector((state) => state.auth.userType);
 
  useEffect(() => {
    dispatch(fetchVacancy());
    dispatch(fetchResume())
  }, [])
  const dynamicContent = () => {
    if (userType === 'companies') {
      return (
        <View>
        <View style={styles.button}>
          <Button
           color="#152131"
            title="Find Resumes"
            onPress={() => props.navigation.navigate('Data')}
          />
          </View>
          <View style={styles.button}>
          <Button
           color="#152131"
            title="Post Vacancy"
            onPress={() =>
              props.navigation.navigate('Vacancies', {
                buttonText: 'Vacancy',
                data: ''
              })
            }
          />
        </View>
        </View>
      );
    } else if (userType === 'students') {
      return (
        <View >
        <View style={styles.button}>
          <Button
           color="#152131"
            title="Find Vacancy"
            onPress={() => props.navigation.navigate('Data')}
          />
          </View>
          <View style={styles.button}>
          <Button
           color="#152131"
            title="Post Resume"
            onPress={() =>
              props.navigation.navigate('Resume', {
                buttonText: 'Resume',
                data: ''
              })
            }
          />
          </View>
        </View>
      );
    } else if (userType === 'admin') {
      return (
        <View style={styles.button}>
          <Button color="#152131" title="Resumes and Vacancies" onPress={() => {
              props.navigation.navigate("Data")
          }} />
        </View>
      );
    }
  };
  return <View style={styles.container}>{dynamicContent()}</View>;
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7395AE',
    },
    button: {
      padding: 10,
    },
  });

export default Home;
