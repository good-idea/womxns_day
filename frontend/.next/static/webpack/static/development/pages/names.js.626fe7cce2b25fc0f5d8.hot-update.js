webpackHotUpdate("static/development/pages/names.js",{

/***/ "./components/WomenList.js":
/*!*********************************!*\
  !*** ./components/WomenList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_WomenList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/WomenList */ "./components/styles/WomenList.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./components/helpers/index.js");
var _jsxFileName = "/Users/waverly/Documents/Development/womxn/womxn_day/frontend/components/WomenList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var WomenList =
/*#__PURE__*/
function (_Component) {
  _inherits(WomenList, _Component);

  function WomenList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WomenList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WomenList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      scrollTop: 0,
      newlyAddedItem: null,
      scrollUpdatedOnLoad: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "allWomen", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "womenWithId", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_scrollToHash", function () {
      if (!_this.state.scrollUpdatedOnLoad) {
        if (typeof window === "undefined") {
          return 0;
        } else if (typeof window != "undefined") {
          var hash = window.location.hash;

          if (hash !== "") {
            var id = hash.substr(1);
            var elScrollHeight;
            elScrollHeight = document.querySelector("[data-nameid=".concat(id, "]")).offsetTop;
            var halfHeight = window.innerHeight / 2.5;
            var totalScrollHeight = elScrollHeight - halfHeight;
            document.querySelectorAll(".".concat(id)).forEach(function (el) {
              el.classList.add("highlighted");
            });

            if (elScrollHeight) {
              window.scrollTo({
                top: totalScrollHeight,
                left: 0 // behavior: "smooth"

              });
            }
          }
        } else {
          window && (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.scrollTo && typeof window.scrollTo === "function" && window.scrollTo(0, 0);
        }

        _this.setState({
          scrollUpdatedOnLoad: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_calcWomenList", function () {
      if (_this.props.women) {
        _this.womenWithId = _this.props.women.map(function (woman, index) {
          var personId = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["genId"])(woman.name);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            "data-nameid": personId,
            className: "womanItem ".concat(personId),
            key: woman.id + personId + index,
            onClick: function onClick(e) {
              return _this._addHighlightClass(e);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "inner-relative",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            onClick: function onClick(e) {
              return _this._onShareClick(e);
            },
            className: "super-cta",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, "Share"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, woman.name)));
        });
        _this.allWomen = _this.props.women.map(function (woman, index) {
          var personId = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["genId"])(woman.name);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            onClick: function onClick(e) {
              return _this._addHighlightClass(e);
            },
            className: "womanItem ".concat(personId),
            key: woman.id + index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "inner-relative",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            onClick: function onClick(e) {
              return _this._onShareClick(e);
            },
            className: "super-cta",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: this
          }, "Share"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, woman.name)));
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onScroll", function (e) {
      var bodyScrollTop = window.pageYOffset;

      _this.setState({
        scrollTop: bodyScrollTop
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_throttleScroll", lodash__WEBPACK_IMPORTED_MODULE_2__["throttle"](_this._onScroll, 100));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onShareClick", function (e) {
      console.log("inside ons hare click");
      var id = e.currentTarget.parentNode.parentNode.dataset.nameid;
      var domain = "http://localhost:7777";
      var link = "".concat(domain, "/names#").concat(id);
      var dummy = document.createElement("div");
      document.body.appendChild(dummy);
      dummy.value = link;
      dummy.select();
      document.execCommand("copy"); // document.body.removeChild(dummy);

      console.log(link);
      e.currentTarget.innerHTML = "Copied to clipboard";
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_addHighlightClass", function (e) {
      // extract data-nameid
      var dataId = e.currentTarget.dataset.nameid;
      document.querySelectorAll(".".concat(dataId)).forEach(function (el) {
        return el.classList.add("highlighted");
      }); // el.classList.addClass("highlighted");
    });

    return _this;
  }

  _createClass(WomenList, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this._calcWomenList();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["setBodyHeight"])();
      document.addEventListener("scroll", this._throttleScroll);
      window.addEventListener("resize", _helpers__WEBPACK_IMPORTED_MODULE_4__["setBodyHeight"]);
      this.setState({
        scrollTop: window.pageYOffset
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // if a new woman has been added
      if (prevProps.women.length !== this.props.women.length) {
        this._calcWomenList();

        this._scrollToHash();

        Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["setBodyHeight"])();
      }

      if (!this.state.scrollUpdatedOnLoad) {
        this._scrollToHash();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof window === "undefined") {
        return 0;
      } else if (typeof window != "undefined") {
        document.removeEventListener("scroll", this._throttleScroll);
      }
    } // This will run the first time setBodyHeight is called.

  }, {
    key: "render",
    value: function render() {
      var containers = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["WomenListWrap"], {
        formFocused: this.props.formFocused,
        style: {
          transform: "rotateY(".concat(this.props.x, "deg)")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        style: {
          transformOrigin: "bottom center",
          transform: "matrix3d(\n                  1,\n                  0,\n                  0,\n                  0,\n                  0,\n                  ".concat(this.props.matrix3DVal2, ",\n                  ").concat(this.props.matrix3DVal1, ",\n                  0,\n                  0,\n                  ").concat(this.props.matrix3DVal1 * -1, ",\n                  ").concat(this.props.matrix3DVal2, ",\n                  0,\n                  0,\n                  0,\n                  0,\n                  1\n                )")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["InnerWrap"], {
        order: 0,
        style: {
          transform: "translate3d(0px, -".concat(this.state.scrollTop, "px, 0px)")
        },
        className: "womenWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, this.allWomen)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["InnerWrap"], {
        id: "womanList",
        style: {
          transform: "translate3d(0px, -".concat(this.state.scrollTop, "px, 0px)")
        },
        order: 1,
        className: "womenWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, this.womenWithId)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        style: {
          transformOrigin: "top center",
          transform: "matrix3d(\n                  1,\n                  0,\n                  0,\n                  0,\n                  0,\n                  ".concat(this.props.matrix3DVal2, ",\n                  ").concat(this.props.matrix3DVal1, ",\n                  0,\n                  0,\n                  ").concat(this.props.matrix3DVal1 * -1, ",\n                  ").concat(this.props.matrix3DVal2, ",\n                  0,\n                  0,\n                  0,\n                  0,\n                  1\n                )")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_WomenList__WEBPACK_IMPORTED_MODULE_3__["InnerWrap"], {
        style: {
          transform: "translate3d(0px, -".concat(this.state.scrollTop, "px, 0px)")
        },
        order: 2,
        className: "womenWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, this.allWomen)))));
      return containers;
    }
  }]);

  return WomenList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // Set default props


WomenList.defaultProps = {
  x: 0,
  y: 0,
  matrix3DVal1: 0.18,
  matrix3DVal2: 0.89
};
/* harmony default export */ __webpack_exports__["default"] = (WomenList);

/***/ })

})
//# sourceMappingURL=names.js.626fe7cce2b25fc0f5d8.hot-update.js.map