'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Alerts user to updates
 */
var AppStatus = function (_React$Component) {
  _inherits(AppStatus, _React$Component);

  function AppStatus() {
    _classCallCheck(this, AppStatus);

    return _possibleConstructorReturn(this, (AppStatus.__proto__ || Object.getPrototypeOf(AppStatus)).apply(this, arguments));
  }

  _createClass(AppStatus, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var migrations = _props.migrations;
      var app = _props.app;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'local-t2-app-reduxt Status'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Migration# ',
          migrations
        ),
        _react2.default.createElement(
          'div',
          null,
          JSON.stringify(app)
        )
      );
    }
  }]);

  return AppStatus;
}(_react2.default.Component);

var stateToProps = function stateToProps(state, ownProps) {
  return {
    app: state.app,
    migrations: state.migrations // TODO remove me because migration not (currently) port of this bundle
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(AppStatus);