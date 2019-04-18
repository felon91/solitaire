import {Component} from "../core/component";
import {COUNT_BOTTOM_CARDS} from "../index";

export class BottomCards extends Component {
  constructor(cls, {cardsStack}) {
    super(cls);
    this.cards = cardsStack;
    this.clearCards(Array.from(this.$el.querySelectorAll('.cards__element')));
    this.clearCards(Array.from(this.$el.parentElement.querySelectorAll('.cards__field')));
    renderBottomCards.bind(this)();
  }

  init() {

  }


}

function renderBottomCards() {
  const bottomCards = removePartCards.bind(this)().sort(this.compareRandom);
  const bottomElements = this.$el.querySelectorAll('.cards__element');

  bottomCards.forEach((item, i) => {
    if (i === 0) {
      bottomElements[0].insertAdjacentHTML('beforeEnd', item);
    } else if (i <= 2) {
      bottomElements[1].insertAdjacentHTML('beforeEnd', item);
    } else if (i > 2 && i <= 5) {
      bottomElements[2].insertAdjacentHTML('beforeEnd', item);
    } else if (i >= 6 && i <= 9) {
      bottomElements[3].insertAdjacentHTML('beforeEnd', item);
    } else if (i >= 10 && i <= 14) {
      bottomElements[4].insertAdjacentHTML('beforeEnd', item);
    } else if (i >= 15 && i <= 20) {
      bottomElements[5].insertAdjacentHTML('beforeEnd', item);
    } else if (i >= 21 && i <= 27) {
      bottomElements[6].insertAdjacentHTML('beforeEnd', item);
    }
  });

  bottomElements.forEach((item) => {
    item.lastElementChild.classList.remove('disabled');

  });

}

function removePartCards() {
  const bottomStack = [];

  Array.from(this.cards.$el.querySelectorAll('div')).forEach((card, iterationNumber) => {
    if (iterationNumber < COUNT_BOTTOM_CARDS) {
      bottomStack.push(card.outerHTML);
      card.remove();
    }
  });

  return bottomStack;

}