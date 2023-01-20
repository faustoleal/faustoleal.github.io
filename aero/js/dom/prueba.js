const d = document,
  w = window;

export function animado() {
  let $show = d.querySelectorAll(".item");
  let scrollTop = d.documentElement.scrollTop;

  for (var i = 0; i < $show.length; i++) {
    let altura = $show[i].offsetTop;
    if (altura - 200 < scrollTop) {
      $show[0].classList.add("show");
      $show[1].classList.add("derecha");
    }
    if (altura - 0 < scrollTop) {
      $show[2].classList.add("show");
      $show[3].classList.add("derecha");
    }
    if (altura - -400 < scrollTop) {
      $show[4].classList.add("show");
      $show[5].classList.add("derecha");
    }
    if (altura - -600 < scrollTop) {
      $show[6].classList.add("show");
      $show[7].classList.add("derecha");
    }
  }

  w.addEventListener("scroll", animado);
}
