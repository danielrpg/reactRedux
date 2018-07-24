import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import postReducer from './reducers/postReducer';

const compose = composeWithDevTools({});
const middleware = compose(
    applyMiddleware()
);

const store = createStore(postReducer, middleware);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , document.getElementById('root'));
