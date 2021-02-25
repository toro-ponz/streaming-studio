import React from 'react';
import ReactDOM from 'react-dom';
import { Titlebar, Color } from 'custom-electron-titlebar';

const container = document.getElementById('contents');

ReactDOM.render(<p>Hello, world!</p>, container);

new Titlebar({
  backgroundColor: Color.fromHex('#1C212E'),
  menu: null,
});
