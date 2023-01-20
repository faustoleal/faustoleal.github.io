import scrollTopButton from "./dom/scroll-top.js";
import hamburgerMenu from "./dom/menu-hamburguesa.js";
import { animado } from "./dom/prueba.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".menu-btn", ".nav-menu");
  scrollTopButton(".scroll-top-btn");
  animado();
});
