webpackHotUpdate("static/development/pages/compaigns/requests.js",{

/***/ "./pages/compaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/compaigns/requests/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/RequestRow */ "./components/RequestRow.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;








var CompaignRequest =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(CompaignRequest, _Component);

  function CompaignRequest() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CompaignRequest);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(CompaignRequest).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CompaignRequest, [{
    key: "renderRow",
    value: function renderRow() {
      var _this = this;

      return this.props.requests.map(function (request, index) {
        return __jsx(_components_RequestRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
          key: index,
          id: index,
          request: request,
          address: _this.props.address
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell,
          Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Row,
          Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Header;
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx("h1", null, "\u8BF7\u6C42\u5217\u8868"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: "/compaigns/".concat(this.props.address, "/requests/new")
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        primary: true
      }, " \u589E\u52A0\u8BF7\u6C42")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "ID "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "\xA0\u63CF\u8FF0"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "\u603B\u7684\u91D1\u989D"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "\xA0\u53D7\u76CA\u4EBA\u5730\u5740"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "\u540C\u610F\u7684\u6570\u91CF"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "\xA0\u662F\u5426\u540C\u610F"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell, null, "finish?"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Body, null, this.renderRow())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var address, campaign, requestCount, approvesCount, requests;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__["default"])(address);
                requestCount = campaign.methods.getRequestCount().call();
                approvesCount = campaign.methods.approvesCount().call();
                _context.next = 6;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(Array(requestCount).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 6:
                requests = _context.sent;
                console.log(requests);
                return _context.abrupt("return", {
                  address: address,
                  requests: requests,
                  approvesCount: approvesCount
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CompaignRequest;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CompaignRequest);

/***/ })

})
//# sourceMappingURL=requests.js.7dd4aa1a7f3df28e7f71.hot-update.js.map