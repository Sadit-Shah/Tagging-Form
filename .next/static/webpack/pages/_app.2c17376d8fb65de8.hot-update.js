"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/enquiry/enquiry.js":
/*!*******************************************!*\
  !*** ./src/components/enquiry/enquiry.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Enquiry; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _enquiry_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enquiry.module.scss */ \"./src/components/enquiry/enquiry.module.scss\");\n/* harmony import */ var _enquiry_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_enquiry_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\nfunction Enquiry() {\n    _s();\n    const [quickEnquiry, setquickEnquiry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleenquiryWindow() {\n        quickEnquiry ? setquickEnquiry(false) : setquickEnquiry(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"enquiryFormCSS.enqContainer \".concat(quickEnquiry, \"?enquiryFormCSS.active\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    onClick: handleenquiryWindow,\n                    children: \"Quick Enquiry\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Development\\\\Next.js\\\\openskytrips\\\\src\\\\components\\\\enquiry\\\\enquiry.js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_enquiry_module_scss__WEBPACK_IMPORTED_MODULE_2___default().enqform),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Full Name*\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Development\\\\Next.js\\\\openskytrips\\\\src\\\\components\\\\enquiry\\\\enquiry.js\",\n                                lineNumber: 16,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Email Address*\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Development\\\\Next.js\\\\openskytrips\\\\src\\\\components\\\\enquiry\\\\enquiry.js\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Mobile Number*\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Development\\\\Next.js\\\\openskytrips\\\\src\\\\components\\\\enquiry\\\\enquiry.js\",\n                                lineNumber: 18,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Enter Your City*\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Development\\\\Next.js\\\\openskytrips\\\\src\\\\components\\\\enquiry\\\\enquiry.js\",\n                                lineNumber: 19,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Arrival City*\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Development\\\\Next.js\\\\openskytrips\\\\src\\\\components\\\\enquiry\\\\enquiry.js\",\n                                lineNumber: 20,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"No of Persons*\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Development\\\\Next.js\\\\openskytrips\\\\src\\\\components\\\\enquiry\\\\enquiry.js\",\n                                lineNumber: 21,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"No of Days*\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Development\\\\Next.js\\\\openskytrips\\\\src\\\\components\\\\enquiry\\\\enquiry.js\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                placeholder: \"Would you like to provide more details*\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Development\\\\Next.js\\\\openskytrips\\\\src\\\\components\\\\enquiry\\\\enquiry.js\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Development\\\\Next.js\\\\openskytrips\\\\src\\\\components\\\\enquiry\\\\enquiry.js\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Development\\\\Next.js\\\\openskytrips\\\\src\\\\components\\\\enquiry\\\\enquiry.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"button\",\n                    className: (_enquiry_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btnsubmit),\n                    value: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Development\\\\Next.js\\\\openskytrips\\\\src\\\\components\\\\enquiry\\\\enquiry.js\",\n                    lineNumber: 26,\n                    columnNumber: 15\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Development\\\\Next.js\\\\openskytrips\\\\src\\\\components\\\\enquiry\\\\enquiry.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Enquiry, \"m2UGpy4n9b/r39iFcrpMtdnTITc=\");\n_c = Enquiry;\nvar _c;\n$RefreshReg$(_c, \"Enquiry\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9lbnF1aXJ5L2VucXVpcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDa0Q7QUFDWDtBQUN4QixTQUFTRyxVQUFVOztJQUM5QixNQUFNLENBQUNDLGNBQWFDLGdCQUFnQixHQUFDSCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ25ELFNBQVNJLHNCQUFzQjtRQUMzQkYsZUFBYUMsZ0JBQWdCLEtBQUssSUFBRUEsZ0JBQWdCLElBQUksQ0FBQztJQUM3RDtJQUNBLHFCQUNJO2tCQUVJLDRFQUFDRTtZQUFJQyxXQUFXLCtCQUE0QyxPQUFiSixjQUFhOzs4QkFDeEQsOERBQUNLO29CQUFHQyxTQUFTSjs4QkFBcUI7Ozs7Ozs4QkFDbEMsOERBQUNDO29CQUFJQyxXQUFXUixxRUFBc0I7OEJBQ2xDLDRFQUFDWTs7MENBQ0csOERBQUNDO2dDQUFNQyxhQUFZOzs7Ozs7MENBQ25CLDhEQUFDRDtnQ0FBTUMsYUFBWTs7Ozs7OzBDQUNuQiw4REFBQ0Q7Z0NBQU1DLGFBQVk7Ozs7OzswQ0FDbkIsOERBQUNEO2dDQUFNQyxhQUFZOzs7Ozs7MENBQ25CLDhEQUFDRDtnQ0FBTUMsYUFBWTs7Ozs7OzBDQUNuQiw4REFBQ0Q7Z0NBQU1DLGFBQVk7Ozs7OzswQ0FDbkIsOERBQUNEO2dDQUFNQyxhQUFZOzs7Ozs7MENBQ25CLDhEQUFDQztnQ0FBU0QsYUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR2hDLDhEQUFDRDtvQkFBTUcsTUFBSztvQkFBU1IsV0FBV1IsdUVBQXdCO29CQUN4RGtCLE9BQU07Ozs7Ozs7Ozs7Ozs7QUFPcEIsQ0FBQztHQTlCdUJmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2VucXVpcnkvZW5xdWlyeS5qcz85OGQwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBlbnF1aXJ5Rm9ybUNTUyBmcm9tICcuL2VucXVpcnkubW9kdWxlLnNjc3MnXHJcbmltcG9ydCByZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbnF1aXJ5KCkge1xyXG4gICAgY29uc3QgW3F1aWNrRW5xdWlyeSxzZXRxdWlja0VucXVpcnldPXVzZVN0YXRlKGZhbHNlKVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlZW5xdWlyeVdpbmRvdyAoKXtcclxuICAgICAgICBxdWlja0VucXVpcnk/c2V0cXVpY2tFbnF1aXJ5KGZhbHNlKTpzZXRxdWlja0VucXVpcnkodHJ1ZSkgICAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BlbnF1aXJ5Rm9ybUNTUy5lbnFDb250YWluZXIgJHtxdWlja0VucXVpcnl9P2VucXVpcnlGb3JtQ1NTLmFjdGl2ZWB9PlxyXG4gICAgICAgICAgICAgICAgPGgzIG9uQ2xpY2s9e2hhbmRsZWVucXVpcnlXaW5kb3d9PlF1aWNrIEVucXVpcnk8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2VucXVpcnlGb3JtQ1NTLmVucWZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWUqXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzcypcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJNb2JpbGUgTnVtYmVyKlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgQ2l0eSpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJBcnJpdmFsIENpdHkqXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiTm8gb2YgUGVyc29ucypcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJObyBvZiBEYXlzKlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIldvdWxkIHlvdSBsaWtlIHRvIHByb3ZpZGUgbW9yZSBkZXRhaWxzKlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2VucXVpcnlGb3JtQ1NTLmJ0bnN1Ym1pdH0gIFxyXG4gICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCIgLz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG5cclxuXHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiZW5xdWlyeUZvcm1DU1MiLCJyZWFjdCIsInVzZVN0YXRlIiwiRW5xdWlyeSIsInF1aWNrRW5xdWlyeSIsInNldHF1aWNrRW5xdWlyeSIsImhhbmRsZWVucXVpcnlXaW5kb3ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsIm9uQ2xpY2siLCJlbnFmb3JtIiwiZm9ybSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsInR5cGUiLCJidG5zdWJtaXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/enquiry/enquiry.js\n"));

/***/ })

});