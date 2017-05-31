import { createEpicMiddleware } from 'redux-observable';

// Fetch user
import fetchUserEpic from '../user-data/epic';
const epicMiddleware = createEpicMiddleware(fetchUserEpic);

// Something else

export default [epicMiddleware /*, Other */];