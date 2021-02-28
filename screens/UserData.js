import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const UserData = () => {
  let userData;
  const userType = useSelector((state) => state.auth.userType);
  if (userType === 'companies') {
    userData = useSelector((state) => state.user.students);
  } else if (userType === 'students') {
    userData = useSelector((state) => state.user.companies);
  } else {
    userData = useSelector((state) => state.user);
  }
  console.log('user data screen', userType, userData);

  return (
    <View>
      <FlatList
        data={userData}
        renderItem={(itemData) => {
          return (
            <View>
            <Text>{itemData.item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default UserData;
