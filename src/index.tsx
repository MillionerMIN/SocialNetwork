import React from 'react';
import './index.css';
import store from './redux/redux-store';
import App from './components/App/App';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// const renderEntireTree = (state: AppStateType) => {

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
