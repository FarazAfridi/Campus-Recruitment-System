import React from 'react';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import userReducer from './store/reducer/userReducer';
import authReducer from './store/reducer/authReducer';
import {MyStack} from './navigation/stackNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <MyStack />
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
