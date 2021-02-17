import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'font-awesome/css/font-awesome.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faChartLine, faHome, faImages } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faBell, faImages, faChartLine);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
