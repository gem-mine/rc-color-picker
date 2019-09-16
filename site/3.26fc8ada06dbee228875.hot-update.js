webpackHotUpdate(3,{

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.setPrototypeOf = __webpack_require__(250);
__webpack_require__(251);
__webpack_require__(453);

/* eslint-disable no-unused-vars */
var React = __webpack_require__(11);
if (!React.PropTypes) {
  React.PropTypes = __webpack_require__(219);
}
if (!React.createClass) {
  React.createClass = __webpack_require__(223);
}
/* eslint-enable no-unused-vars */
var ReactDOM = __webpack_require__(155);
var ReactRouter = __webpack_require__(133);
var history = __webpack_require__(472);
var data = __webpack_require__(484);
var routes = __webpack_require__(521)(data);

var _window$location = window.location,
    pathname = _window$location.pathname,
    search = _window$location.search,
    hash = _window$location.hash;

var location = '' + pathname + search + hash;
var basename = '/rc-color-picker/site/';
/* eslint-enable no-unused-vars */
var NProgress = __webpack_require__(216);

function createElement(Component, props) {
  NProgress.done();
  var dynamicPropsKey = props.location.pathname;
  return React.createElement(Component, _extends({}, props, Component[dynamicPropsKey]));
};

ReactRouter.match({ routes: routes, location: location, basename: basename }, function () {
  var router = React.createElement(ReactRouter.Router, {
    history: ReactRouter.useRouterHistory(history.createHistory)({ basename: basename }),
    routes: routes,
    createElement: createElement
  });
  ReactDOM.render(router, document.getElementById('engine-content'));
});

/***/ })

})
//# sourceMappingURL=3.26fc8ada06dbee228875.hot-update.js.map