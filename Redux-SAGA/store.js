import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import myReducer from './reducers';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({myReducer});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
