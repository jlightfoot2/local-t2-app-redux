'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UpdateDialog = require('./UpdateDialog');

var _UpdateDialog2 = _interopRequireDefault(_UpdateDialog);

var _reactRedux = require('react-redux');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateToProps = function stateToProps(state, ownProps) {
  return {
    open: state.app.updates.available && !state.app.updates.userNotified,
    message: 'There are updates available for this app. This page will reload.'
  };
};

var stateToDispatch = function stateToDispatch(dispatch, ownProps) {
  return {
    onClick: function onClick() {
      dispatch((0, _actions.updateUserNotified)(true));
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    }
  };
};

exports.default = (0, _reactRedux.connect)(stateToProps, stateToDispatch)(_UpdateDialog2.default);