export const templateReducer = (state = {template: {}}, {type, payload}) => {
    switch(type){
        // case 'LOGIN_USER':
        // case 'LOGIN_USER_SUCCESS':
        //     return {
        //         ...state,
        //         isAuthenticated: true,
        //         user: payload,
        //     }
        // case 'LOGOUT_USER_SUCCESS':
        //     return{
        //         ...state,
        //         isAuthenticated: false,
        //         user: null,
        //     }
        case 'LOADING_TEMPLATE':
            return {
                templateLoading: true,
            }
        case 'LOADING_TEMPLATE_SUCCESS':
            return {
                templateName: payload,
                templateLoading: false,
            }
            case 'LOADING_TEMPLATE_FAILURE':
                return {
                    templateLoading: false,
                }
        default:
            return state;
    }
}