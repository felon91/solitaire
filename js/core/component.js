export class Component {

  constructor(cls) {
    this.$el = document.querySelector(`.${cls}`);
    this.init();
  }

  init() {}

  compareRandom() {
    return Math.random() - 0.5;
  }

  clearCards(element) {
    if (Array.isArray(element)) {
      element.forEach((item) => {
        item.innerHTML = '';
      })
    } else {
      element.innerHTML = '';
    }
  }

}