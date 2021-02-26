import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import Store from './store';

ReactDom.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('container'),
);
