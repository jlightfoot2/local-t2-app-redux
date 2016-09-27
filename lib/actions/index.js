'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIsOnline = exports.connectivityCheckEnd = exports.connectivityCheckStart = exports.updateUserNotified = exports.updatesAvailable = exports.connectivityChange = exports.cacheStatusChange = exports.CONNECTIVITY_CHECK_END = exports.CONNECTIVITY_CHECK_START = exports.CONNECTIVITY_CHANGE = exports.CACHE_STATUS_CHANGE = exports.UPDATES_USER_NOTIFIED = exports.UPDATES_AVAILABLE = undefined;

var _isOnline = require('is-online');

var _isOnline2 = _interopRequireDefault(_isOnline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPDATES_AVAILABLE = exports.UPDATES_AVAILABLE = 'T2/UPDATES_AVAILABLE';
var UPDATES_USER_NOTIFIED = exports.UPDATES_USER_NOTIFIED = 'T2/UPDATES_USER_NOTIFIED';
var CACHE_STATUS_CHANGE = exports.CACHE_STATUS_CHANGE = 'T2/T2CACHE_STATUS_CHANGE';
var CONNECTIVITY_CHANGE = exports.CONNECTIVITY_CHANGE = 'T2/CONNECTIVITY_CHANGE';
var CONNECTIVITY_CHECK_START = exports.CONNECTIVITY_CHECK_START = 'T2/CONNECTIVITY_CHECK_START';
var CONNECTIVITY_CHECK_END = exports.CONNECTIVITY_CHECK_END = 'T2/CONNECTIVITY_CHECK_END';
var cacheStatusChange = exports.cacheStatusChange = function cacheStatusChange(isReady) {
  return {
    type: CACHE_STATUS_CHANGE,
    isReady: isReady
  };
};
var connectivityChange = exports.connectivityChange = function connectivityChange(status) {
  return {
    type: CONNECTIVITY_CHANGE,
    status: status
  };
};
var updatesAvailable = exports.updatesAvailable = function updatesAvailable(available) {
  var meta = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  return {
    type: UPDATES_AVAILABLE,
    available: available,
    meta: meta
  };
};

var updateUserNotified = exports.updateUserNotified = function updateUserNotified(notified) {
  return {
    type: UPDATES_USER_NOTIFIED,
    notified: notified
  };
};

var connectivityCheckStart = exports.connectivityCheckStart = function connectivityCheckStart() {
  return {
    type: CONNECTIVITY_CHECK_START
  };
};

var connectivityCheckEnd = exports.connectivityCheckEnd = function connectivityCheckEnd() {
  return {
    type: CONNECTIVITY_CHECK_END
  };
};

var checkIsOnline = exports.checkIsOnline = function checkIsOnline(checkSource) {
  var onlineId = 1;

  return function (dispatch, getState) {
    dispatch(connectivityCheckStart());
    var makeRequest = true;
    if ('onLine' in navigator) {
      if (onlineId && !navigator.onLine) {
        //if navigator says offline we "over-rule" the is-online module
        onlineId = 0;
        makeRequest = false;
        if (getState().app.connectivity.status !== onlineId) {
          //see if status has changed
          dispatch(connectivityChange(onlineId));
        }
        dispatch(connectivityCheckEnd());
      }
    }
    if (makeRequest) {
      (0, _isOnline2.default)(function (online) {
        onlineId = online ? 1 : 0;
        if (getState().app.connectivity.status !== onlineId) {
          dispatch(connectivityChange(onlineId));
        }
        dispatch(connectivityCheckEnd());
      });
    }
  };
};

exports.default = {
  cacheStatusChange: cacheStatusChange,
  connectivityChange: connectivityChange,
  updatesAvailable: updatesAvailable,
  updateUserNotified: updateUserNotified,
  connectivityCheckStart: connectivityCheckStart,
  connectivityCheckEnd: connectivityCheckEnd,
  checkIsOnline: checkIsOnline
};