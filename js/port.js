$(document).ready(function () {
  var offsetTopSec2 = $("#page_2").offset().top;
  $(window).scroll(function () {
    if ($(window).scrollTop() > offsetTopSec2 - 150) {
      $(".page_2 .container .job_ex_cont .top").addClass("moving_space_left");
      $(".page_2 .container .job_ex_cont .bottom").addClass("moving_space_left");
      $(".page_2 .container .job_ex_cont .mid").addClass("moving_space_right");
    } else {
      $(".page_2 .container .job_ex_cont .top").removeClass("moving_space_left");
      $(".page_2 .container .job_ex_cont .bottom").removeClass("moving_space_left");
      $(".page_2 .container .job_ex_cont .mid").removeClass("moving_space_right");
    }
  });

  var offsetTopheader = $(".page_1").offset().top;
  $(window).scroll(function () {
    if ($(window).scrollTop() > offsetTopheader + 50) {
      $(".page .header").addClass("headerspread");
    } else {
      $(".page .header").removeClass("headerspread");
    }
  });
});

const content = "A person who enjoys her work. \n Welcome to my profile. \n I`m Web Publisher, " + "H2J.";
const text = document.querySelector(".text");
let i = 0;
function typing() {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}
setInterval(typing, 70);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  loop: true,
  loopAdditionalSlides: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  breakpoints: {
    343: {
      slidesPerView: 1,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },
    },
  },
});

$(function () {
  var $menu = $(".header_right > ul > li");
  var $contents = $("#wrap > div");
  $menu.click(function (x) {
    x.preventDefault();

    var idx = $(this).index();
    var section = $contents.eq(idx);
    var sectionDistance = section.offset().top;

    $(window).scroll(function () {
      $contents.each(function () {
        if ($(this).offset().top <= $(window).scrollTop()) {
          var idx = $(this).index();
          $menu.removeClass("on");
          $menu.eq(idx).addClass("on");
        }
      });
    });
  });
});

const spans = document.querySelectorAll(".header_right > ul > li");
const contents = document.querySelectorAll("#wrap > div");
const firstTop = contents[0].offsetTop;
const secondTop = contents[1].offsetTop;
const thirdTop = contents[2].offsetTop;
const forthTop = contents[3].offsetTop;
const fifthTop = contents[4].offsetTop;
spans[0].onclick = function () {
  window.scroll({ top: firstTop, behavior: "smooth" });
};
spans[1].onclick = function () {
  window.scroll({ top: secondTop, behavior: "smooth" });
};
spans[2].onclick = function () {
  window.scroll({ top: thirdTop, behavior: "smooth" });
};

spans[3].onclick = function () {
  window.scroll({ top: forthTop, behavior: "smooth" });
};

spans[4].onclick = function () {
  window.scroll({ top: fifthTop, behavior: "smooth" });
};

// IntersectionObserver
// let options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: [0.5, 0.75, 1]
// }
// let observer = new IntersectionObserver((e) => {
//     e.forEach((bx) => {
//         console.log(bx)
//         console.log(bx.intersectionRatio)
//         if (bx.isIntersecting) {
//             bx.target.style.opacity = 1;
//         } else {
//             bx.target.style.opacity = 0;
//         }
//     })
// }, options);

// const target = document.querySelector('.job_ex_container_pad');

// observer.observe(target)

function sendEmail() {
  window.location.href = "mailto:gracefield0814@gmail.com";
}

document.getElementById("year").textContent = new Date().getFullYear();
