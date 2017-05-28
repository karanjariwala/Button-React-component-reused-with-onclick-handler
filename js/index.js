'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Button.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props;
    var onClickFunction = _props.onClickFunction;
    var incrementValue = _props.incrementValue;

    return React.createElement(
      'button',
      { onClick: function onClick() {
          console.log('Button' + incrementValue + _this2.state);
          onClickFunction(incrementValue);
        } },
      '+',
      incrementValue
    );
  };

  return Button;
}(React.Component);

var Result = function Result(_ref) {
  var counter = _ref.counter;

  return React.createElement(
    'div',
    null,
    counter
  );
};

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    var _temp, _this3, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this3), _this3.state = { counter: 0 }, _this3.incrementCounter = function (incrementValue) {
      console.log('app' + _this3.props.incrementValue + _this3.state.counter);
      _this3.setState(function (prevState) {
        return { counter: prevState.counter + incrementValue };
      });
    }, _temp), _possibleConstructorReturn(_this3, _ret);
  }

  App.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Button, { incrementValue: 1, onClickFunction: this.incrementCounter }),
      React.createElement(Button, { incrementValue: 2, onClickFunction: this.incrementCounter }),
      React.createElement(Button, { incrementValue: 3, onClickFunction: this.incrementCounter }),
      React.createElement(Result, { counter: this.state.counter })
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));