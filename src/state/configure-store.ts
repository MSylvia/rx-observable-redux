import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import epic from './epic';

export default function configureStore () {
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(...epic)));
  return store;
}