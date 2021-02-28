import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {addResume} from '../store/action/userAction';

const StudentResumes = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Button
        title="Add Resume"
        onPress={() => dispatch(addResume('4', 'new person', 3, 'lahore'))}
      />
    </View>
  );
};

export default StudentResumes;
