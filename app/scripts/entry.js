import './../styles/main.scss';
import 'normalize.css';

import React from 'react';
import {render} from 'react-dom';

import App from './components/app.js';

render(
  <App/>,
  document.getElementById('app')
);
