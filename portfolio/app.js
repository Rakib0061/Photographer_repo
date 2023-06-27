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
  } else if (Y <= 1550) {
    exclusiveShot_item_2.forEach((vlu) => {
      vlu.classList.remove("paralax");
    });
  }
});

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ Sticky Navbar @@@@@@@@@@@@@@@@@@@@@@@@@@@

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ Button sound effect @@@@@@@@@@@@@@@@@@@@@@@@@@@

const a_tag = document.querySelectorAll("a");
const button_tag = document.querySelectorAll("button");
const audio_track1 = new Audio();
const audio_track2 = new Audio();
audio_track1.src = "./portfolio/photos/a_click.wav";
audio_track2.src = "./portfolio/photos/btn_click.wav";


for (let i = 0; i < a_tag.length; i++) {
  a_tag[i].addEventListener("click", () => {
    audio_track1.play();
  });
}

for (let i = 0; i < button_tag.length; i++) {
  button_tag[i].addEventListener("click", () => {
    audio_track2.play();
  });
}


//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ Button sound effect @@@@@@@@@@@@@@@@@@@@@@@@@@@



//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ address button @@@@@@@@@@@@@@@@@@@@@@@@@@@

const phone_todo = document.getElementById("phone_todo");
const phone_btn = document.getElementById("phone_btn");

phone_btn.addEventListener("click", () => {
  if (phone_todo.style.display != "block") {
    phone_todo.style.display = "block";
  }
  else {
    phone_todo.style.display = "none";
  }
});

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ address button @@@@@@@@@@@@@@@@@@@@@@@@@@@
