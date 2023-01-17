
const intialState = {
    userDetails: [],
    err: null,
    loading: false,
    message:'',
};

const userData = (state = intialState, action) => {
    switch (action.type) {
        case "USER_ADD": return {
            ...state,
            loading: true,
        }
        case "USER_ADD_SUCCESS":
            return {
                ...state,
                loading: false,
                userDetails: action.payload,
                message:action.payload,
                err: null
            }
        case "USER_ADD_FAIL": return {
            ...state,
            loading: false,
            userDetails: null,
            message:action.payload,
            err: action.payload,
        }
        case "LOGOUT": return {
            ...state,
            userDetails: null
        }

        // case "UPDATE_PROFILE": return {
        //     ...state,
        //     loading: true
        // }
        // case "UPDATE_PROFILE_SUCCESS": return {
        //     ...state,
        //     loading: false,
        //     userDetails: action.payload.user,
        //     err: null
        // }

        // case "UPDATE_PROFILE_FAIL": return {
        //     ...state,
        //     loading: false,
        //     userDetails: null,
        //     err: action.payload
        // }

        default: return state;
    }
}

export default userData;