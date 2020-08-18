import "owl.carousel";

class SliderTwo {
  constructor() {
    this.initSwiper();
  }

  initSwiper() {
    $(".owl-slider-two").owlCarousel({
      items: 1,
      dots: true,
      loop: true,
      autoplay: true,
    });
  }
}

export default SliderTwo;
