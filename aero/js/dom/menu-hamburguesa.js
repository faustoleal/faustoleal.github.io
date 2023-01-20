const d = document;

export default function hamburgerMenu(menuBtn, navMenu) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)) {
      d.querySelector(navMenu).classList.toggle("nav-menu_visible");
    }

    /* if (e.target.matches(panelLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(menuBtn).classList.remove("is-active");
    } */
  });
}
