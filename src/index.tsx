import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import Store from './store';

const container = document.getElementById('container');

ReactDom.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  container,
);
