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
    sub_menus: [],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog",
    link: "/blog",
    active: "",
    sub_menus: [],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Contacto",
    link: "/contact",
    active: "",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Más",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/about", title: "Sobre Nosotros" },
      { link: "/faq", title: "Preguntas Frecuentes" },
    ],
  },
];
export default menu_data;
