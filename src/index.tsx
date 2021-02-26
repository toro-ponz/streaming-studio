import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import Store from './store';
import App from './containers/App';

ReactDom.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('container'),
);
