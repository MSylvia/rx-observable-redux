import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import AppContainer from './AppContainer';
import './index.css';

import { Provider } from 'react-redux';
import store from './Store';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
