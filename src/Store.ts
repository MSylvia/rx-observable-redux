import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import userdataReducer from './user-data/reducer';
import { fetchUserEpic } from './user-data/actions';

const epics = [createEpicMiddleware(fetchUserEpic)];
const reducers = combineReducers({
    userdata: userdataReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...epics)));
export default store;