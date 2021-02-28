import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {addResume} from '../store/action/userAction';

const StudentResumes = ({route, navigation}) => {
  const {buttonText} = route.params;
  const dispatch = useDispatch();
  const id = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  const [name, setName] = useState('');
  const [gpa, setGpa] = useState('');
  const [location, setLocation] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
      />
      <TextInput style={styles.input} placeholder="Gpa" onChangeText={setGpa} />
      <TextInput
        style={styles.input}
        placeholder="Location"
        onChangeText={setLocation}
      />
      <View style={styles.button}>
        <Button
         color="#152131"
          title={`Post ${buttonText}`}
          onPress={() => {
            dispatch(addResume(id, name, gpa, location));
            navigation.navigate('Home');
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
  input: {
    padding: 10,
    marginBottom: 10,
  },
  button: {
    padding: 10,
  },
});

export default StudentResumes;
