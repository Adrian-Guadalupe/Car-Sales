import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux'
import { Provider } from 'react-redux';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider> 
   ,rootElement);
