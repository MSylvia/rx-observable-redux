import { combineReducers } from 'redux'

import userdataReducer from '../user-data/reducer'

export default combineReducers({
    userdata: userdataReducer
})