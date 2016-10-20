'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = require('../actions');

var defaultApp = {
  connectivity: {
    status: 1, // 1 == online, 0 == offline
    lastCheck: 0, // seconds ago
    lastCheckType: 'event' // ('click','timer','event')
  },
  cache: {
    isReady: false // ready for offlining
  },
  updates: {
    available: false,
    userNotified: false
  }
};

var app = exports.app = function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultApp;
  var action = arguments[1];

  switch (action.type) {
    case _actions.CONNECTIVITY_CHECK_START:
      return _extends({}, state, { connectivity: _extends({}, state.connectivity, { lastCheck: 0 }) });
    case _actions.CONNECTIVITY_CHANGE:
      return _extends({}, state, { connectivity: _extends({}, state.connectivity, { status: action.status }) });
    case _actions.UPDATES_USER_NOTIFIED:
      return _extends({}, state, { updates: _extends({}, state.updates, { userNotified: action.notified }) });
    case _actions.CACHE_STATUS_CHANGE:
      return _extends({}, state, { cache: _extends({}, state.cache, { isReady: action.isReady }) });
    case _actions.UPDATES_AVAILABLE:
      return _extends({}, state, { updates: _extends({}, state.updates, { available: action.available }) });
  }
  return state;
};

exports.default = app;