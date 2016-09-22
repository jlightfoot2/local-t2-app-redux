require('babel-polyfill');
import appReducer from './reducers';
import appActions from './actions';
import createSagaMiddleware from 'redux-saga';
//sagaMiddleware.run(sagaRoot);
import appSaga, {checkOnlineStatus} from './sagas';
const appMiddleware = store => next => {
  
  store.run(rootSaga);

  return action => {
    let result = next(action);
    if (false) {
      //next(windowResize(window.innerWidth, window.innerHeight));
    }
    return result;
  };
};

export {
  appReducer,
  appActions,
  appMiddleware,
  appSaga,
  checkOnlineStatus
};

export default {
  appReducer,
  appActions,
  appMiddleware,
  appSaga,
  checkOnlineStatus
};
