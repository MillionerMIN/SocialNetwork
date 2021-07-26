import React from 'react';
import './index.css';
import store from './redux/redux-store';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppStateType } from './redux/redux-store';
import { Provider } from 'react-redux';


const renderEntireTree = (state: AppStateType) => {

    ReactDOM.render(<BrowserRouter>
        <Provider store={store}>
            <App state={state} />
        </Provider>
    </BrowserRouter>,
        document.getElementById('root')
    )
}

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state);
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

