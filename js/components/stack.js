import {Component} from "../core/component";
import {Drag} from "../service/drag.service";

export class Stack extends Component {

  constructor(cls, stack) {
    super(cls);
    this.stack = stack;
    this.clearCards(this.$el);
    this.clearCards(this.$el.parentElement.querySelector('.cards__open'));
    this.initGame();
  }

  initGame() {
    const html = renderStack(this.stack).sort(this.compareRandom).join('');
    this.$el.insertAdjacentHTML('afterBegin', html);
    this.$el.addEventListener('click', openCard.bind(this));
    document.addEventListener('mousedown', Drag.startDrag.bind(this));
    document.addEventListener('mouseup', Drag.upDrag.bind(this));
  }

}

function renderStack(stack) {
  const result = [];

  for (let key in stack) {

    if(stack[key].length > 0) {
      stack[key].forEach((item) => {
        result.push(`<div class="disabled js-card ${key}"><span>${item}</span><span>${item}</span></div>`);
      });
    }

  }

  return result;
}

function openCard(event) {
  if (event.target.classList.contains('js-card')) {
    this.$el.parentElement.querySelector('.cards__open').insertBefore(event.target, null);
    event.target.classList.remove('disabled');
  } else {
    const stack = Array.from(this.$el.parentElement.querySelectorAll('.cards__open > div')).map((card) => {
      card.classList.add('disabled');
      return card.outerHTML;
    }).reverse().join('');
    this.$el.parentElement.querySelector('.cards__open').innerHTML = '';
    this.$el.insertAdjacentHTML('afterBegin', stack);
  }
}