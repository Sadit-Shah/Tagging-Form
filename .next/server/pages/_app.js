(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8673:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__ZK5Q_",
	"footerinfo": "footer_footerinfo__UA_gs",
	"socialicons": "footer_socialicons__RDlq5",
	"rowfooter": "footer_rowfooter__NEfEr",
	"footercols4": "footer_footercols4__zweYy",
	"footmenu": "footer_footmenu__lel0e",
	"copyright": "footer_copyright__aJr_b"
};


/***/ }),

/***/ 2846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/header/header.js
var header = __webpack_require__(47);
// EXTERNAL MODULE: ./src/components/footer/footer.module.scss
var footer_module = __webpack_require__(8673);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__(9783);
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var aos = __webpack_require__(1759);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/footer/footer.js





function Footer() {
    (0,external_react_.useEffect)(()=>{
        external_aos_default().init({
            duration: 1500
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (footer_module_default()).footer,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (footer_module_default()).footerinfo,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            "data-aos": "fade-up",
                            children: "Open Sky Trips"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            "data-aos": "fade-up",
                            className: (footer_module_default()).socialicons,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.facebook.com/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "fab fa-facebook fa-1x",
                                    title: "facebook"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://twitter.com/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "fab fa-twitter fa-1x",
                                    title: "twitter"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.instagram.com/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "fab fa-instagram fa-1x",
                                    title: "instagram"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.youtube.com/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "fab fa-youtube fa-1x",
                                    title: "youtube"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.linkedin.com/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "fab fa-linkedin fa-1x",
                                    title: "linkedin"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (footer_module_default()).rowfooter,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            "data-aos": "fade-up",
                            className: (footer_module_default()).footercols4,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Our Tours"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (footer_module_default()).menutourscontainer,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        id: "menu-tours",
                                        className: (footer_module_default()).footmenu,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                id: "menu-item-972",
                                                className: "menu-item menu-item-type-post_type menu-item-object-skt_tours menu-item-972",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://sktperfectdemo.com/demos/adventure/tour/mountain-climbing-tour/",
                                                    children: "Mountain Climbing Tour"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                id: "menu-item-970",
                                                className: "menu-item menu-item-type-post_type menu-item-object-skt_tours menu-item-970",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://sktperfectdemo.com/demos/adventure/tour/mountain-biking-trip/",
                                                    children: "Mountain Biking Trip"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                id: "menu-item-974",
                                                className: "menu-item menu-item-type-post_type menu-item-object-skt_tours menu-item-974",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://sktperfectdemo.com/demos/adventure/tour/mountain-hiking-tour/",
                                                    children: "Mountain Hiking Tour"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                id: "menu-item-973",
                                                className: "menu-item menu-item-type-post_type menu-item-object-skt_tours menu-item-973",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://sktperfectdemo.com/demos/adventure/tour/wildlife-adventure/",
                                                    children: "Wildlife Adventure"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                id: "menu-item-971",
                                                className: "menu-item menu-item-type-post_type menu-item-object-skt_tours menu-item-971",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://sktperfectdemo.com/demos/adventure/tour/polar-tour/",
                                                    children: "Polar Tour"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                id: "menu-item-975",
                                                className: "menu-item menu-item-type-post_type menu-item-object-skt_tours menu-item-975",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://sktperfectdemo.com/demos/adventure/tour/yatch-sailing-tour/",
                                                    children: "Yatch Sailing Tour"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            "data-aos": "fade-up",
                            className: (footer_module_default()).footercols4,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Quick Links"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (footer_module_default()).menufootercontainer,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        id: "menu-footer",
                                        className: (footer_module_default()).footmenu,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                id: "menu-item-51",
                                                className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-10 current_page_item menu-item-51",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://sktperfectdemo.com/demos/adventure/",
                                                    "aria-current": "page",
                                                    children: "Home"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                id: "menu-item-52",
                                                className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-52",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://sktperfectdemo.com/demos/adventure/about/",
                                                    children: "About"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                id: "menu-item-62",
                                                className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-62",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://sktperfectdemo.com/demos/adventure/tours/",
                                                    children: "Tours"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                id: "menu-item-60",
                                                className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-60",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://sktperfectdemo.com/demos/adventure/destination/",
                                                    children: "Destination"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                id: "menu-item-56",
                                                className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-56",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://sktperfectdemo.com/demos/adventure/blog-right-sidebar/",
                                                    children: "News"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                id: "menu-item-58",
                                                className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-58",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://sktperfectdemo.com/demos/adventure/contact-layout-1/",
                                                    children: "Contact"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            "data-aos": "fade-up",
                            className: (footer_module_default()).footercols4,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Contact Info"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Ellahibagh ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "Hazratbal road, Buchpora ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "Srinagar-190020 "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (footer_module_default()).spacecode,
                                    id: "",
                                    style: {
                                        height: "10px"
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    style: {
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            style: {
                                                marginRight: "20px"
                                            },
                                            children: "Phone:"
                                        }),
                                        " +91-9599961054"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    style: {
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            style: {
                                                marginRight: "21px"
                                            },
                                            children: "E-mail:"
                                        }),
                                        "Openskytrips@gmail.com"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    style: {
                                        marginBottom: "21px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            style: {
                                                marginRight: "11px"
                                            },
                                            children: "Website:"
                                        }),
                                        "https://openskytrips.com"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (footer_module_default()).copyright,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "\xa9 Copyright 2023 Openskytrips. All Rights Reserved"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Design by MS Software Solutions"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/layout/layout.js




function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: ./src/pages/_app.js



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 9783:
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,964,47], () => (__webpack_exec__(2846)));
module.exports = __webpack_exports__;

})();