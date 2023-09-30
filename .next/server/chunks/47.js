exports.id = 47;
exports.ids = [47];
exports.modules = {

/***/ 3718:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__3o0p0",
	"logo": "header_logo___eW3r",
	"logoimg": "header_logoimg__rRv0f",
	"navbar": "header_navbar__vE8Ft",
	"active": "header_active__UWSzZ",
	"btncall": "header_btncall__bkIpF",
	"hamburger": "header_hamburger__Y8FNS",
	"showMenu": "header_showMenu__PeEJ3",
	"overlay": "header_overlay__YuaZg",
	"showOverlay": "header_showOverlay__smwi9"
};


/***/ }),

/***/ 47:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3718);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);





function Header() {
    const [sideMenu, setsideMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // add overflow hidden for body tag
        if (sideMenu) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
    }, [
        sideMenu
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logoimg),
                    src: "/images/logo.png",
                    loading: "lazy"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navbar)} ${sideMenu ? `${(_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().showMenu)}` : ""}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                onClick: ()=>setsideMenu(false),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/packages/packages",
                                onClick: ()=>setsideMenu(false),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: "Packages"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                onClick: ()=>setsideMenu(false),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: "Gallery"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/contactus/contactus",
                                onClick: ()=>setsideMenu(false),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: "Contact Us"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/aboutus/aboutus",
                                onClick: ()=>setsideMenu(false),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: "About Us"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                onClick: ()=>setsideMenu(false),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: "Account"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "button",
                        className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().btncall),
                        value: "Call +91-9958299985"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hamburger),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fa fa-bars",
                    onClick: ()=>setsideMenu((prev)=>!prev)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().overlay)} ${sideMenu ? `${(_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().showOverlay)}` : ""}`,
                onClick: ()=>setsideMenu(false)
            })
        ]
    });
}


/***/ })

};
;