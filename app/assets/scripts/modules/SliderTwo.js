import "owl.carousel";

class SliderTwo {
  constructor() {
    this.initSwiper();
  }

  initSwiper() {
    $(".owl-slider-two").owlCarousel({
      items: 1,
      dots: true,
    });
  }
}

export default SliderTwo;
