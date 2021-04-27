import React from 'react';
import './index.css';
import store from './redux/state';
import App from './App';
import ReactDOM from 'react-dom';






const renderEntireTree = () => {
    ReactDOM.render(<App store={store}/>,
        document.getElementById('root'))
}

store.subscriber(renderEntireTree)

renderEntireTree()



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

