(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9804:
/***/ ((module) => {

// Exports
module.exports = {
	"slider": "Home_slider__uGGVO",
	"sliderOverlay": "Home_sliderOverlay__sb156",
	"pdsection": "Home_pdsection__VThYt",
	"pdheading": "Home_pdheading__NWd6g",
	"h1": "Home_h1__UfjRP",
	"h5": "Home_h5__P3h31",
	"pdestinations": "Home_pdestinations__cxdxe",
	"pdcard": "Home_pdcard__7EPv9",
	"desc": "Home_desc___ZH3B",
	"btnknowmore": "Home_btnknowmore__ZTY85",
	"booking": "Home_booking__Wzk4G",
	"btnbooking": "Home_btnbooking__vnqIi",
	"abtcont": "Home_abtcont__YkO7o",
	"habt": "Home_habt__jPEFf",
	"abtitle": "Home_abtitle__fJqlH",
	"abcaption": "Home_abcaption__WEI_E",
	"bydbtn": "Home_bydbtn__9mAIn",
	"byd": "Home_byd__MdNVV",
	"imageslider": "Home_imageslider__JR9bd"
};


/***/ }),

/***/ 1224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./src/styles/Home.module.scss
var Home_module = __webpack_require__(9804);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./node_modules/owl.carousel/dist/assets/owl.carousel.css
var owl_carousel = __webpack_require__(7186);
// EXTERNAL MODULE: ./node_modules/owl.carousel/dist/assets/owl.theme.default.css
var owl_theme_default = __webpack_require__(4808);
// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__(9783);
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var aos = __webpack_require__(1759);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/slider/slider.js







var $ = __webpack_require__(2947);
if (false) {}
// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/slider/slider.js -> " + "react-owl-carousel"
        ]
    },
    ssr: false
});
// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';
const Slider = ()=>{
    (0,external_react_.useEffect)(()=>{
        external_aos_default().init({
            duration: 2000
        });
    });
    const options = {
        margin: 0,
        nav: false,
        responsiveClass: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            600: {
                items: 3
            },
            700: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(OwlCarousel, {
        "data-aos": "flip-down",
        className: "owl-theme",
        loop: true,
        margin: 4,
        nav: true,
        dots: false,
        animateIn: true,
        ...options,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "images/homeslider/slider1.jpg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "images/homeslider/slider2.jpg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "images/homeslider/slider3.png"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "images/homeslider/slider4.jpg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "images/homeslider/slider5.jpg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "images/homeslider/slider6.jpg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "images/homeslider/slider7.jpg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "images/homeslider/slider8.jpg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "images/homeslider/slider9.jpg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "images/homeslider/slider10.jpg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "images/homeslider/slider11.jpg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "images/homeslider/slider12.png"
                })
            })
        ]
    });
};
/* harmony default export */ const slider = (Slider);

;// CONCATENATED MODULE: external "react-player"
const external_react_player_namespaceObject = require("react-player");
// EXTERNAL MODULE: ./src/components/header/header.js
var header = __webpack_require__(47);
;// CONCATENATED MODULE: ./src/pages/index.js









function Home() {
    (0,external_react_.useEffect)(()=>{
        external_aos_default().init({
            duration: 2000
        });
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "OpenSkyTrips"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default()).slider,
                id: "player",
                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                    src: "https://www.youtube.com/embed/qgJqE7-YEl0?&autoplay=1&mute=1&;loop=1&controls=0&modestbranding=0",
                    allow: "autoplay; encrypted-media",
                    width: "100%",
                    height: "100%",
                    frameborder: "0",
                    allowFullScreen: true,
                    title: "video",
                    modestbranding: "0"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                "data-aos": "fade-up",
                className: (Home_module_default()).pdsection,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Home_module_default()).pdheading,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Home_module_default()).h1,
                                children: "Take a look at Our"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Home_module_default()).h5,
                                children: "Most Popular Destinations"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Home_module_default()).pdestinations,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: (Home_module_default()).pdcard,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/gulmarg.jpg",
                                        alt: "",
                                        width: "100%",
                                        height: "300px"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Home_module_default()).desc,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Srinagar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "button",
                                                className: (Home_module_default()).btnknowmore,
                                                value: "Know More"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: (Home_module_default()).pdcard,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/pahalgham.jpg",
                                        alt: "",
                                        width: "100%",
                                        height: "300px"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Home_module_default()).desc,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Pahalgam"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "button",
                                                className: (Home_module_default()).btnknowmore,
                                                value: "Know More"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: (Home_module_default()).pdcard,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/srinagar.jpg",
                                        alt: "",
                                        width: "100%",
                                        height: "290px"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Home_module_default()).desc,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Gulmarg"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "button",
                                                className: (Home_module_default()).btnknowmore,
                                                value: "Know More"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: (Home_module_default()).pdcard,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/srinagar.jpg",
                                        alt: "",
                                        width: "100%",
                                        height: "290px"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Home_module_default()).desc,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Sonamarg"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "button",
                                                className: (Home_module_default()).btnknowmore,
                                                value: "Know More"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).abtcont,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        "data-aos": "fade-up",
                        src: "images/palne.jpeg"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "data-aos": "fade-up",
                        className: (Home_module_default()).habt,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Home_module_default()).abtitle,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Get ready for real time adventure"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Home_module_default()).abcaption,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (Home_module_default()).mb50,
                                        children: "Let’s start your journey with us, your dream will come true."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (Home_module_default()).mb50,
                                        children: "The world's best travel destination 'KASHMIR' hailed all over the world for its incredible natural beauty cradled high in the lofty green Himalayas surrounded by mountain peaks, lush green valleys, glistening lakes, temples and spectacular Mughal-era gardens. "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (Home_module_default()).mb50,
                                        children: "Our Services Are Ideal for Individuals, Couples, Families and Groups."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Home_module_default()).bydbtn,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "button",
                                            className: (Home_module_default()).byd,
                                            button: true,
                                            onClick: "/packages/packages",
                                            value: "Book Your Destination"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(slider, {})
        ]
    });
}


/***/ }),

/***/ 9783:
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ 2947:
/***/ ((module) => {

"use strict";
module.exports = require("jquery");

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

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [121,676,964,550,47], () => (__webpack_exec__(1224)));
module.exports = __webpack_exports__;

})();