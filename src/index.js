import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'mobx-react';

import store from './stores';

//router
import { startRouter } from 'mobx-router';
import views from '~/router/views';
startRouter(views, store);

import { firebaseApp } from './util/firebase/initializer'

ReactDOM.render(
  <Provider store={store}>
       <App />
  </Provider>,
  document.getElementById('root')
);
