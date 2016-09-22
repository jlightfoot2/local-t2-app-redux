'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkOnlineStatus = checkOnlineStatus;
exports.default = sagaRoot;

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _actions = require('../actions');

var _marked = [checkOnlineStatus, sagaRoot].map(regeneratorRuntime.mark);

// Our worker Saga: will perform the async increment task
function checkOnlineStatus() {
  var defaultDelay = arguments.length <= 0 || arguments[0] === undefined ? 20000 : arguments[0];
  return regeneratorRuntime.wrap(function checkOnlineStatus$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!true) {
            _context.next = 7;
            break;
          }

          _context.next = 3;
          return (0, _effects.call)(_reduxSaga.delay, defaultDelay);

        case 3:
          _context.next = 5;
          return (0, _effects.put)((0, _actions.checkIsOnline)('timer'));

        case 5:
          _context.next = 0;
          break;

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

// Our watcher Saga
function sagaRoot() {
  return regeneratorRuntime.wrap(function sagaRoot$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.fork)(checkOnlineStatus);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}