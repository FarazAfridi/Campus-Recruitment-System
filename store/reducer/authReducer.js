import {LOGIN, SIGN_UP} from "../action/auth";

const initialState = {
    userType: null,
    token: null
}

export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
            ...state,
            token: action.payload.token,
            userType: action.payload.userType
        }
      case SIGN_UP:
        return {
          ...state,
          token: action.payload.token,
          userType: action.payload.userType
        }

      default:
        return state;
    }
  };
