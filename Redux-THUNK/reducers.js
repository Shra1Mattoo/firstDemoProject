import { SET_USER_NAME, SET_USER_AGE, QUOTE } from "./actions";

const initialState = {
    name: '-',
    age: '-',
    quote: []
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case QUOTE:
            return { ...state, quote: action.payload }
        case SET_USER_NAME:
            return { ...state, name: action.payload };
        case SET_USER_AGE:
            return { ...state, age: action.payload };
        default:
            return state;
    }
}
export default userReducer