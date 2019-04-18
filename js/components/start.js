import {Component} from "../core/component";
import {Stack} from "./stack";
import {stack} from "../index";
import {BottomCards} from "./bottomcards";
import {Timer} from "./timer";
import {Drag} from "../service/drag.service";

export class Start extends Component {
  constructor(cls) {
    super(cls);
  }

  init() {
    this.$el.addEventListener('click', startGame.bind(this));
  }

}

function startGame(event) {
  const cardsStack = new Stack('cards__shirt', stack);
  const bottomCards = new BottomCards('cards__bottom', {cardsStack: cardsStack});
  new Timer('cards__timer');
  document.addEventListener('mousemove', Drag.moveDrag.bind(this));
}