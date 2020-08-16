import "owl.carousel";

class HeroSlider {
  constructor() {
    this.initializeSwiper();
  }

  initializeSwiper() {
    $(".swiper-container-one").owlCarousel({
      items: 1,
      dots: true,
      loop: true,
    });
  }
}
export default HeroSlider;
