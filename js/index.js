import {Start} from "./components/start";

const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',];

export const stack = {
  heart: cards,
  diamond: cards,
  spade: cards,
  club: cards,
};

export const pictureToNumber = {
  J: '11',
  Q: '12',
  K: '13',
  A: '1'
};

export const COUNT_BOTTOM_CARDS = 28;

new Start('start');