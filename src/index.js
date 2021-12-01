import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Apps from './Apps';

import './assets/css/main.css';

ReactDOM.render(
  <BrowserRouter>
    <Apps />
  </BrowserRouter>,
  document.getElementById('root')
);
