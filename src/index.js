require('babel-polyfill');
import appReducer from './reducers';
import appActions from './actions';
import appComponents from './components';

import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose } from 'redux';
import appSaga, {checkOnlineStatus} from './sagas';
import {registerPromise} from './lib/serviceWorker';
const appMiddleware = store => next => {
  return action => {
    let result = next(action);
    //does nothing for now
    return result;
  };
};

export {
  appReducer,
  appActions,
  appMiddleware,
  appSaga,
  checkOnlineStatus,
  appComponents,
  registerPromise
};

export default {
  appReducer,
  appActions,
  appMiddleware,
  appSaga,
  checkOnlineStatus,
  appComponents,
  registerPromise
};
