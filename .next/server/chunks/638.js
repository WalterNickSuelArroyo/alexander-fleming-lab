"use strict";
exports.id = 638;
exports.ids = [638];
exports.modules = {

/***/ 3081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useSticky = ()=>{
    const [sticky, setSticky] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const stickyHeader = ()=>{
        if (window.scrollY > 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener("scroll", stickyHeader);
    }, []);
    return {
        sticky
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSticky);


/***/ }),

/***/ 4690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/layout/header/menu-data.js
var menu_data = __webpack_require__(1933);
;// CONCATENATED MODULE: ./src/layout/header/mobile-menus.jsx



// internal

const MobileMenus = ()=>{
    const [navTitle, setNavTitle] = (0,external_react_.useState)("");
    //openMobileMenu
    const openMobileMenu = (menu)=>{
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "mean-nav",
            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: menu_data/* default.map */.Z.map((menu, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                        children: [
                            menu.has_dropdown && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "has-dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: menu.link,
                                        children: menu.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "submenu",
                                        style: {
                                            display: navTitle === menu.title ? "block" : "none"
                                        },
                                        children: menu.sub_menus.map((sub, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: sub.link,
                                                    children: sub.title
                                                })
                                            }, i))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: `mean-expand ${navTitle === menu.title ? "mean-clicked" : ""}`,
                                        onClick: ()=>openMobileMenu(menu.title),
                                        style: {
                                            fontSize: "18px",
                                            cursor: "pointer"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fal fa-plus"
                                        })
                                    })
                                ]
                            }),
                            !menu.has_dropdown && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: menu.link,
                                    children: menu.title
                                })
                            })
                        ]
                    }, i))
            })
        })
    });
};
/* harmony default export */ const mobile_menus = (MobileMenus);

// EXTERNAL MODULE: ./src/modals/ImagePopup.jsx
var ImagePopup = __webpack_require__(796);
;// CONCATENATED MODULE: ./src/common/sidebar.jsx





const sidebar_images = [
    {
        img: "/assets/img/blog/blog-in-01.jpg"
    },
    {
        img: "/assets/img/blog/blog-in-02.jpg"
    },
    {
        img: "/assets/img/blog/blog-in-03.jpg"
    }
];
const Sidebar = ({ isActive , setIsActive  })=>{
    // photoIndex
    const [photoIndex, setPhotoIndex] = (0,external_react_.useState)(null);
    // image open state
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    // handleImagePopup
    const handleImagePopup = (i)=>{
        setPhotoIndex(i);
        setIsOpen(true);
    };
    //  images
    const img = sidebar_images.map((item)=>item.img);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `tpsideinfo tp-side-info-area ${isActive ? "tp-sidebar-opened" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>setIsActive(false),
                        className: "tpsideinfo__close",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fal fa-times"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "tpsideinfo__logo mb-40",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/img/logo/white_logo_o.png",
                                alt: "logo"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mobile-menu mean-container d-block d-lg-none",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mean-bar",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(mobile_menus, {})
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "tpsideinfo__content mb-60",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: " d-none d-xl-block",
                                children: "Our mission is to ensure the generation of accurate and precise findings."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Cont\xe1ctanos"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-star"
                                    }),
                                    "Mz. 67 Lt. 15 Armando V. Los Olivos, Lima, Peru"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "https://wa.link/uten11",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-star"
                                    }),
                                    "+51 944 689 364"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "mailto:noreply@envato.com",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-star"
                                    }),
                                    "alexander.fleming.lab@gmail.com"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "tpsideinfo__content-inputarea mb-60 d-none d-xl-block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Get Update"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tpsideinfo__content-inputarea-input",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    action: "#",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            placeholder: "Enter Mail"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "tpsideinfo__content-inputarea-input-btn",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa-solid fa-paper-plane"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "tpsideinfo__gallery mb-35 d-none d-xl-block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Cheack Instagram Post"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tpsideinfo__gallery-item",
                                children: sidebar_images.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>handleImagePopup(i),
                                        className: "popup-image",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: item.img,
                                            alt: ""
                                        })
                                    }, i))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "tpsideinfo__socialicon",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.youtube.com/@AlexanderFlemingLab",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-brands fa-youtube"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-brands fa-facebook-f"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>setIsActive(false),
                className: `body-overlay ${isActive ? "opened" : ""}`
            }),
            isOpen && /*#__PURE__*/ jsx_runtime_.jsx("imgPopup", {
                images: img,
                setIsOpen: setIsOpen,
                photoIndex: photoIndex,
                setPhotoIndex: setPhotoIndex
            })
        ]
    });
};
/* harmony default export */ const sidebar = (Sidebar);


/***/ }),

/***/ 1933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu_data = [
    {
        id: 1,
        mega_menu: false,
        has_dropdown: false,
        title: "Home",
        link: "/",
        active: "active",
        sub_menus: []
    },
    {
        id: 2,
        mega_menu: false,
        has_dropdown: false,
        title: "Servicios",
        link: "/service-3",
        active: "",
        sub_menus: []
    },
    {
        id: 3,
        mega_menu: false,
        has_dropdown: false,
        title: "Blog",
        link: "/blog",
        active: "",
        sub_menus: []
    },
    {
        id: 4,
        mega_menu: false,
        has_dropdown: false,
        title: "Contacto",
        link: "/contact",
        active: ""
    },
    {
        id: 5,
        mega_menu: false,
        has_dropdown: true,
        title: "M\xe1s",
        link: "/about",
        active: "",
        sub_menus: [
            {
                link: "/about",
                title: "Sobre Nosotros"
            },
            {
                link: "/faq",
                title: "Preguntas Frecuentes"
            }
        ]
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu_data);


/***/ }),

/***/ 7863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5384);
/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1933);




const NavMenu = ({ num =false  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: _menu_data_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].map */ .Z.map((menu, index)=>menu.has_dropdown ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "has-dropdown",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link_js__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: `${menu?.active}`,
                            href: menu.link,
                            children: [
                                num && index <= 9 ? `0${index + 1 + "."}` : num && index + 1 + ".",
                                menu.title
                            ]
                        }),
                        menu.has_dropdown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "sub-menu",
                            children: menu.sub_menus.map((sub_m, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link_js__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: sub_m.link,
                                        children: sub_m.title
                                    })
                                }, i))
                        })
                    ]
                }, menu.id) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link_js__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: menu.link,
                        children: [
                            num && index <= 9 ? `0${index + 1 + "."}` : num && index + 1 + ".",
                            menu.title
                        ]
                    })
                }, menu.id))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavMenu);


/***/ }),

/***/ 796:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_18_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6297);
/* harmony import */ var react_18_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_18_image_lightbox__WEBPACK_IMPORTED_MODULE_2__);



const ImagePopup = ({ images , setIsOpen , photoIndex , setPhotoIndex  })=>{
    return /*#__PURE__*/ _jsx(React.Fragment, {
        children: /*#__PURE__*/ _jsx(Lightbox, {
            mainSrc: images[photoIndex],
            nextSrc: images[(photoIndex + 1) % images.length],
            prevSrc: images[(photoIndex + images.length - 1) % images.length],
            onCloseRequest: ()=>setIsOpen(false),
            onMovePrevRequest: ()=>setPhotoIndex((photoIndex + images.length - 1) % images.length),
            onMoveNextRequest: ()=>setPhotoIndex((photoIndex + 1) % images.length)
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ImagePopup)));


/***/ })

};
;