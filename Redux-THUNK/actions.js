import axios from "axios";

export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const QUOTE = 'QUOTE';

export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};
export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    })
}

export const setQuote = () => {
    return dispatch => {
        console.log('inside setQuote')
        axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes/5').then(Response => {
            const quotes = Response.data
            console.log(quotes)
            dispatch({
                type: QUOTE,
                payload: quotes,
            })
        });
    }
}