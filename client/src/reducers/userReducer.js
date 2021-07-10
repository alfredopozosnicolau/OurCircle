import * as types from '../actions/actionTypes';

const initialState = {
    user: null,
    role:null,
    token:null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOG_IN:
            return {
                ...state,
                ...action.user
            };
        case types.LOG_OUT:
            console.log('deleting everything')
            return initialState
        default:
            return initialState
        
    }
}

export default userReducer;
