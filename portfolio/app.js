//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ Sticky Navbar @@@@@@@@@@@@@@@@@@@@@@@@@@@

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let y = window.scrollY;
  navbar.classList.toggle("sticky", y > 0);
});

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ Sticky Navbar @@@@@@@@@@@@@@@@@@@@@@@@@@@

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ Sticky Navbar @@@@@@@@@@@@@@@@@@@@@@@@@@@

const cv_btn_p = document.getElementById("cv_btn_p");
const cv_btn = document.getElementById("cv_btn");

cv_btn_p.innerHTML = cv_btn_p.innerText
  .split("")
  .map(
    (vlu, i) =>
      `<span style = "transform: rotate(${
        i * 10
      }deg);position: absolute;transform-origin: 0px 65px;">${vlu}</span>`
  )
  .join("");

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ Sticky Navbar @@@@@@@@@@@@@@@@@@@@@@@@@@@

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ Sticky Navbar @@@@@@@@@@@@@@@@@@@@@@@@@@@

let exclusiveShot_item_2 = document.querySelectorAll(".exclusiveShot_item_2");

document.addEventListener("scroll", () => {
  let Y = window.scrollY;
  
  if (Y >= 1550) {
    exclusiveShot_item_2.forEach((vlu) => {
      vlu.classList.add("paralax");
    });
  }
  else if (Y <= 1550) {
    exclusiveShot_item_2.forEach((vlu) => {
      vlu.classList.remove("paralax");
    });
  }

});

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ Sticky Navbar @@@@@@@@@@@@@@@@@@@@@@@@@@@
