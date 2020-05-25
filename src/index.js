import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducers/counterReducer';

// createStoreをimportしstoreを作成 reducerを渡しておく
const store = createStore(counterReducer);

ReactDOM.render(
  // App.jsでmapStateToPropsとmapDispatchToPropsを使うためにAppコンポーネントをProvierで囲う
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
