import React from 'react';
import {FlatList, Text, View, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deletePost} from '../store/action/userAction';

const UserData = () => {
  const dispatch = useDispatch();
  let userData;
  const userType = useSelector((state) => state.auth.userType);
  if (userType === 'companies') {
    userData = useSelector((state) => state.user.students);
  } else if (userType === 'students') {
    userData = useSelector((state) => state.user.companies);
  } else {
    const resumes = useSelector((state) => state.user.students);
    const vacancies = useSelector((state) => state.user.companies);
    userData = resumes.concat(vacancies);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={userData}
        renderItem={(itemData) => {
          return (
            <View style={styles.cardContainer}>
              {userType === 'companies' && (
                <View style={styles.card}>
                  <Text style={styles.text}>{itemData.item.data.name}</Text>
                  <Text style={styles.text}>{itemData.item.data.gpa}</Text>
                  <Text style={styles.text}>{itemData.item.data.location}</Text>
                </View>
              )}
              {userType === 'students' && (
                <View >
                  <Text style={styles.text}>{itemData.item.data.name}</Text>
                  <Text style={styles.text}>{itemData.item.data.job}</Text>
                  <Text style={styles.text}>{itemData.item.data.vacancy}</Text>
                </View>
              )}
              {userType === 'admin' && (
                <View>
                  <View >
                    <Text style={styles.text}>{itemData.item.data.name}</Text>
                    <Text style={styles.text}>{itemData.item.data.job}</Text>
                    <Text style={styles.text}>
                      {itemData.item.data.vacancy}
                    </Text>
                    <Text style={styles.text}></Text>
                  </View>
                  <View >
                    <Text style={styles.text}>{itemData.item.data.name}</Text>
                    <Text style={styles.text}>{itemData.item.data.gpa}</Text>
                    <Text style={styles.text}>
                      {itemData.item.data.location}
                    </Text>
                  </View>
                </View>
              )}

              <View style={styles.button}>
                {userType === 'admin' && (
                  <Button
                    title="Delete"
                    color="#152131"
                    onPress={() => dispatch(deletePost(itemData.item.id))}
                  />
                )}
              </View>
            </View>
          );
        }}
      />
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
  },
  cardContainer: {
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  button: {
    padding: 10,
  },
});

export default UserData;
