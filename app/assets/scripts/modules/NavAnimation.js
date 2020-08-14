class NavAnim {
  constructor() {
    this.navigation = document.querySelector(".nav");
    this.scrollEvent();
  }

  scrollEvent() {
    window.addEventListener("scroll", e => {
      if (window.pageYOffset > 100) {
        this.navigation.classList.add("nav--sticky", "shadow");
      } else if (window.pageYOffset < 100) {
        this.navigation.classList.remove("nav--sticky", "shadow");
      }
    });
  }
}

export default NavAnim;
