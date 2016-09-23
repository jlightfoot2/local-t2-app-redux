'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Alerts user to updates
 */
var UpdateDialog = function (_React$Component) {
  _inherits(UpdateDialog, _React$Component);

  function UpdateDialog() {
    _classCallCheck(this, UpdateDialog);

    return _possibleConstructorReturn(this, (UpdateDialog.__proto__ || Object.getPrototypeOf(UpdateDialog)).apply(this, arguments));
  }

  _createClass(UpdateDialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var open = _props.open;
      var onClick = _props.onClick;
      var message = _props.message;

      var actions = [_react2.default.createElement(_FlatButton2.default, {
        label: 'Ok',
        primary: true,
        onTouchTap: onClick
      })];

      return _react2.default.createElement(
        _Dialog2.default,
        {
          actions: actions,
          modal: true,
          open: open,
          onRequestClose: onClick
        },
        message
      );
    }
  }]);

  return UpdateDialog;
}(_react2.default.Component);

exports.default = UpdateDialog;