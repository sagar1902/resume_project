export const userReducer = (state = {user: {}}, {type, payload}) => {
    switch(type){
        case 'LOGIN_USER':
        case 'LOGIN_USER_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: payload,
            }
        case 'LOGOUT_USER_SUCCESS':
            return{
                ...state,
                isAuthenticated: false,
                user: null,
            }
        default:
            return state;
    }
}