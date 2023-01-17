
const intialState = {
    userListFetch: [],
    err: null,
    loading: false, 
};

const userFetch = (state = intialState, action) => {
    switch (action.type) {
    
        case "FETCH_USER": return {
            ...state,
            loading: true 
        }
        case "FETCH_USER_SUCCESS": return {
            ...state,
            loading: false,
            userListFetch: action.payload,
            err: null
        }
        case "FETCH_USER_FAIL": return {
            ...state,
            loading: false,
            userListFetch: null,
            err: action.payload
        }

        case "LOGOUT": return {
            ...state,
            userListFetch: null
        }

        default: return state;
    }
}

export default userFetch;
