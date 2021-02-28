import React from 'react';
import {View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {addVacancy} from '../store/action/userAction';

const JobVacancies = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Button
        title="Add Vacancy"
        onPress={() =>
          dispatch(
            addVacancy('5', 'some name', 'web developer', '30', 'islamabad'),
          )
        }
      />
    </View>
  );
};

export default JobVacancies;
