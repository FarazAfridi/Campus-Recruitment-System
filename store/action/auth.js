export const LOGIN = 'LOGIN';
export const SIGN_UP = 'SIGN_UP';

export const signup = (email, password, userType) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBI0WGI9UI19G_Z2THKW-Bv5XDppTgg7JU',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      },
    );

      if (!response.ok) {
        const errorResData = await response.json();
        const errorId = errorResData.error.message;
        let message = 'Something went wrong!';
        if (errorId === 'EMAIL_EXISTS') {
          message = 'This email exists already!';
        }
        throw new Error(message);
      }

    const data = await response.json();
    const {idToken} = data;
    // console.log(data);

    const res = await fetch(
      `https://campus-recruitment-syste-b8457-default-rtdb.firebaseio.com/users/${userType}.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          token: idToken,
          userType,
        }),
      },
    );
    console.log(res);

    dispatch({type: SIGN_UP, payload: {token: idToken, userType}});
  };
};

export const login = (email, password, userType) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBI0WGI9UI19G_Z2THKW-Bv5XDppTgg7JU',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      const errorId = errorData.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'This email could not be found';
      } else if (errorId === 'INVALID_PASSWORD') {
        message = 'This password is not valid';
      }
      throw Error(message);
    }

    const {idToken} = await response.json();

    dispatch({
      type: LOGIN,
      payload: {
        token: idToken,
        userType
      },
    });
  };
};

// export const fetchUserDetails = async (userType, token) => {
//   const res = await fetch(
//     `https://campus-recruitment-syste-b8457-default-rtdb.firebaseio.com/users/${userType}.json`,
//   );
//   const data = await res.json();
//   const users = [];
//   for (const key in data) {
//     users.push(data[key]);
//   }
//   console.log('token', token)
//   const found = users.find(
//     (user) =>
//     user.token === token
   
//   );
// console.log(found)
// };
