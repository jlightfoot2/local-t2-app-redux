'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkOnlineStatus = exports.appSaga = exports.appMiddleware = exports.appActions = exports.appReducer = undefined;

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _redux = require('redux');

var _sagas = require('./sagas');

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

var appMiddleware = function appMiddleware(store) {
  return function (next) {
    return function (action) {
      var result = next(action);
      //does nothing for now
      return result;
    };
  };
};

exports.appReducer = _reducers2.default;
exports.appActions = _actions2.default;
exports.appMiddleware = appMiddleware;
exports.appSaga = _sagas2.default;
exports.checkOnlineStatus = _sagas.checkOnlineStatus;
exports.default = {
  appReducer: _reducers2.default,
  appActions: _actions2.default,
  appMiddleware: appMiddleware,
  appSaga: _sagas2.default,
  checkOnlineStatus: _sagas.checkOnlineStatus
};