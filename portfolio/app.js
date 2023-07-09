//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ Preloader @@@@@@@@@@@@@@@@@@@@@@@@@@@

const word_span = document.querySelectorAll(".word_span");
const preloader = document.querySelector(".preloader");
const alphabat = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let incresing = 0;
let looping;

window.addEventListener("load", () => {

  function change_loop() {
    // make random alphabet
    word_span.forEach((vlu) => {
      let text = vlu.getAttribute("value").split("").map((vlu, indx) => {
          if (indx < incresing) {
            return vlu;
          }
          else {
            return alphabat.charAt(Math.floor(Math.random() * alphabat.length));
          }
        }).join("");
      incresing += 1 / 150;
      vlu.innerHTML = text;
    });

    // looping this animation 
    if (incresing > 16) {
      cancelAnimationFrame(looping);

      //  make a keyframe for opacity
      preloader.animate(
        {
          opacity: [0.2, 0],
          easing: "cubic-bezier(0, 0 ,1 ,1)",
        },
        {
          duration: 1000,
          fill: "forwards"
        }
      );
        
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1100);
      
      return;
    }

    looping = requestAnimationFrame(change_loop);
  }

  change_loop();

  // make scroll bar top when i reload page 

  if(history.scrollRestoration){
    history.scrollRestoration = "manual"
  }
  else {
    window.scrollTo(0,0)
  }

});

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ Preloader @@@@@@@@@@@@@@@@@@@@@@@@@@@

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ Sticky Navbar @@@@@@@@@@@@@@@@@@@@@@@@@@@

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let y = window.scrollY;
  navbar.classList.toggle("sticky", y > 0);
});

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ Sticky Navbar @@@@@@@@@@@@@@@@@@@@@@@@@@@

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ CV roted effect @@@@@@@@@@@@@@@@@@@@@@@@@@@

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

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ CV roted effect @@@@@@@@@@@@@@@@@@@@@@@@@@@

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ Paralax Effect @@@@@@@@@@@@@@@@@@@@@@@@@@@

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

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ Paralax Effect @@@@@@@@@@@@@@@@@@@@@@@@@@@

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

const form_input = document.querySelectorAll(".form_input");
const form_btn = document.querySelectorAll(".form_btn");

for (let i = 0; i < form_btn.length; i++) {
  form_btn[i].addEventListener("click", () => {
    if (form_input[i].style.display != "block") {
      form_input[i].style.display = "block";
    } else {
      form_input[i].style.display = "none";
    }
  });
}

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ address button @@@@@@@@@@@@@@@@@@@@@@@@@@@

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ swiper Slider use @@@@@@@@@@@@@@@@@@@@@@@@@@@

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 6,
//   spaceBetween: 0,
//   freeMode: true,
//   speed: 1000,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// })

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ swiper Slider use @@@@@@@@@@@@@@@@@@@@@@@@@@@

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ custom Slider  @@@@@@@@@@@@@@@@@@@@@@@@@@@

const slider = document.getElementById("slider");
const slider_img = document.getElementById("slider_img");
const slider_item = document.querySelectorAll(".slider_item");
let init_click_point = 0;
let recall = 0;

slider.addEventListener("mousedown", (e) => {
  // <<<<<<<<<<<<<<<<<<< whre i click >>>>>>>>>>>>>>>>>>>>>>>>>>
  init_click_point = e.clientX;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseup", () => {
  init_click_point = 0;
  slider.style.cursor = "grab";
});

slider.addEventListener("mousemove", (e) => {
  // <<<<<<<<<<<<<<<<<<< after click  how far i move >>>>>>>>>>>>>>>>>>>>>>>>>>
  if (init_click_point === 0) {
    return;
  } else {
    // <<<<<<<<<<<<<<<<<<<<< work with init click point >>>>>>>>>>>>>>>>
    let range_bar =
        init_click_point -
        e.clientX /* substract prev click point from new click point and get the invisible scrollbar width */,
      max_transfrom =
        window.innerWidth /* transfrom half of screen as though transfrom not full div on screen */,
      range_bar_count =
        (range_bar / max_transfrom) *
        -40 /* if i divide those two i can get how many pixel have in invsivle slider...those are two short number thats why multiple by 100(neg valu make right derection) */,
      // <<<<<<<<<<<<<<<<<<<<< work with secend click point >>>>>>>>>>>>>>>>
      range_bar_vlu_Underconstract = range_bar_count + recall,
      range_bar_vlu = Math.max(
        Math.min(range_bar_vlu_Underconstract, 0),
        -100
      ); /* set max min vlu for transfrom point */

    // <<<<<<<<<<<<<<<<<<< work with continue update position >>>>>>>>>>>>>>>>
    recall =
      range_bar_vlu; /* as if it can remember my transform position thats why i constantly update second click  oint from here */

    // <<<<<<<<<<<<<<<<<<<<< style property >>>>>>>>>>>>>>>>
    slider_img.animate(
      {
        // keyframs
        transform: `translate(${range_bar_vlu}%, -50%)`,
        easing: "cubic-bezier(.48,.9,.16,.69)",
      },
      {
        // timing options
        duration: 2500,
        fill: "forwards",
      }
    );
    slider_item.forEach((vlu) => {
      vlu.animate(
        {
          // keyframs
          objectPosition: `${-range_bar_vlu}% 50%`,
          easing: "cubic-bezier(.37,.89,.37,.89)",
        },
        {
          //  timing option
          duration: 2800,
          fill: "forwards",
          // direction: "alternate",
        }
      );
    });
  }
});

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ custom Slider @@@@@@@@@@@@@@@@@@@@@@@@@@@
