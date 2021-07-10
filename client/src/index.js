import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
//import store from './store.js';
import {store, persistor} from './store.js';
import { PersistGate } from 'redux-persist/integration/react'

//const {store, persistor} = returnStoreAndPersistor();

// -- Styles --
import './styles/index.css';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate 
            persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// serviceWorker.register();
