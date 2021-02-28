export const LOGIN = 'LOGIN';

export const login = (username, password, userType) => {
    return {
        type: LOGIN,
        payload: {
            username,
            password,
            userType
        }
    }
}