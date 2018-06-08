import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import { nextSaga, previousSaga } from './sagas/slide';

const sagaMiddleware = createSagaMiddleware();

export default ({
  children,
  initialState,
}) => (
  <Provider
    store={createStore(reducers, initialState, applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),)}
  >
    {children}
  </Provider>
);
