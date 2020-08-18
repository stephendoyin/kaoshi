import "owl.carousel";

class TeamSlider {
  constructor() {
    this.initTeamSlider();
  }

  initTeamSlider() {
    let teamSlider = $(".about-p__slider").owlCarousel({
      dots: true,
      loop: false,
      autoplay: true,
      margin: 30,
      items: 3,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
        },
      },
    });
    $(".about-p__nav-left").click(function () {
      teamSlider.trigger("prev.owl.carousel");
    });
    $(".about-p__nav-right").click(function () {
      teamSlider.trigger("next.owl.carousel");
    });
  }
}
export default TeamSlider;
