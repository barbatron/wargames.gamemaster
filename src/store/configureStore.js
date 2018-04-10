import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'

import { routerMiddleware } from 'react-router-redux'

export default function configureStore(history) {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddlewareInstance = routerMiddleware(history);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddlewareInstance));

  return {
    ...createStore(rootReducer, enhancers),
    runSaga: sagaMiddleware.run,
  };
}
