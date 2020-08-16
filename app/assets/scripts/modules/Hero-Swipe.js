import Swiper, { Navigation, Autoplay } from "swiper";

class HeroSlider {
  constructor() {
    Swiper.use([Navigation, Autoplay]);
    this.initializeSwiper();
  }

  initializeSwiper() {
    this.mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      loop: true,
      speed: 2000,
      autoplay: {
        delay: 5000,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
}
export default HeroSlider;
