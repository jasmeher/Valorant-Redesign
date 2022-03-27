$(document).ready(function () {
  $(window).scroll(function () {
    let scrollPosition = $(window).scrollTop();
    console.log(scrollPosition);

    if (scrollPosition > 320) {
      $(".latest-news-heading-bg").css("opacity", "0.5");
    }

    if (scrollPosition > 370) {
      $(".row-news")
        .addClass("animate__animated animate__fadeInUp")
        .delay(200)
        .css("opacity", "1");
    }
  });
  choosePic();
  $(".video-gameplay").trigger("play");
});

paceOptions = {
  ajax: true,
  document: true,
  eventLag: false,
};

Pace.on("done", function () {
  $(".company-logo-loader")
    .delay(500)
    .animate({ opacity: "0" }, 500, $.bez([0.19, 1, 0.22, 1]));
  // .css("display", "none");

  $(".game-logo-loader")
    .delay(500)
    .animate({ opacity: "1", top: "45%" }, 1000, $.bez([0.19, 1, 0.22, 1]))
    .css("display", "block");

  $(".preloader")
    .delay(1500)
    .animate({ top: "-1000" }, 2000, $.bez([0.19, 1, 0.22, 1]));

  TweenMax.from(".navbar , #header-section , #latest-news", 2, {
    delay: 1.5,
    y: 10,
    opacity: 0,
    ease: Expo.ease,
  });

  $(".banner-text").addClass(
    "animate__animated animate__fadeInLeft animate__delay-3s"
  );
  $("#char-banner").addClass(
    "animate__animated animate__fadeInRight animate__delay-4s"
  );

  $("#nav-animate").addClass(
    "animate__animated animate__fadeInUp animate__delay-4s"
  );
});

const charBanner = new Array(
  "images/reyna.png",
  "images/sova.png",
  "images/breach.png",
  "images/cypher.png",
  "images/phoenix.png",
  "images/raze.png",
  "images/sage.png",
  "images/viper.png",
  "images/jett.png",
  "images/brimstone.png",
  "images/omen.png",
  "images/killjoy.png",
  "images/astra.png",
  "images/skye.png",
  "images/yoru.png",
  "images/kayo.png",
  "images/chamber.png",
  "images/neon.png"
);

function choosePic() {
  var randomNum = Math.floor(Math.random() * charBanner.length);
  document.getElementById("char-banner").src = charBanner[randomNum];
}
