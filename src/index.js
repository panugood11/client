import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers, {});


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

, document.getElementById('root'));



