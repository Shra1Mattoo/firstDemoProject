import { INCREMENT, DECREMENT, CHANGE_BY_AMOUNT, GET_IMAGES_SUCCESS } from './actions';
const initialState = {
    count: 0,
    images: [],
};
export function myReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case CHANGE_BY_AMOUNT:
            return {
                ...state,
                count: parseInt(state.count) + parseInt(action.payload),
            };
            case GET_IMAGES_SUCCESS:
                return{
                    ...state,
                    images:action.payload,
                };
            default:
                return state;

    }
}
export default myReducer;