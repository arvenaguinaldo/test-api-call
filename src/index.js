import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './redux/reducers';
import rootSaga from './redux/saga';
import {getToken} from './redux/actions/Token';
import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

const credentials = {
  grant_type: "client_credentials",
  client_id: "F7QT3UOdiXbHSS2EW0mdOUgQuHBBaXnpEwuMQC99wAKB0ekn1o",
  client_secret: "2K71RzFK0KWP7qQq4D0HtoRTrM0wJIc4MrKhl8zV"
}

store.dispatch(getToken(credentials))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
