import {LOGIN} from "../action/auth";

const initialState = {
    userType: null
}

export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
            ...state,
            userType: action.payload.userType
        }

      default:
        return state;
    }
  };
