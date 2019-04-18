//spade club (черные)
//diamond heart (красные)

import {pictureToNumber} from "../index";
import {time} from "../components/start";

export class Correctstack {

  static checkSuit(dragObject, dropElem) {
    let lastCard = dropElem.querySelector('div:last-child');

    if (lastCard) {

      if (dropElem.classList.contains('cards__element')) {

        if (dragObject.card.classList.contains('spade') || dragObject.card.classList.contains('club')) {

          if (lastCard.classList.contains('diamond') || lastCard.classList.contains('heart')) {
            return true;
          }
          return;
        } else {

          if (lastCard.classList.contains('spade') || lastCard.classList.contains('club')) {
            return true;
          }
          return;
        }

      } else {

        if (dragObject.card.classList.contains('spade')) {

          if (!lastCard.classList.contains('spade')) {
            return false;
          }

        } else if (dragObject.card.classList.contains('club')) {

          if (!lastCard.classList.contains('club')) {
            return false;
          }

        } else if (dragObject.card.classList.contains('diamond')) {

          if (!lastCard.classList.contains('diamond')) {
            return false;
          }

        } else if (dragObject.card.classList.contains('heart')) {

          if (!lastCard.classList.contains('heart')) {
            return false;
          }

        }
        return true;

      }

    } else {

      if (dropElem.classList.contains('cards__field')) {

        if (dragObject.card.children[0].innerText !== 'A') {
          return false;
        }

      } else {

        if (dragObject.card.children[0].innerText !== 'K') {
          return false;
        }

      }

      return true;
    }

  }

  static checkCardNumber(dragObject, dropElem) {
    let lastCard = dropElem.querySelector('div:last-child');

    if (lastCard) {
      let index = lastCard.querySelector('span').innerText;
      let indexCurrent = dragObject.card.children[0].innerText;

      if (dropElem.classList.contains('cards__element')) {

        if (pictureToNumber[index] !== (pictureToNumber[indexCurrent] + 1)) {
          return false;
        }

      } else {

        if (pictureToNumber[index] !== (pictureToNumber[indexCurrent] - 1)) {
          return false;
        }

      }


    } else if (dropElem.classList.contains('cards__field')) {

      if (dragObject.card.children[0].innerText !== 'A') {
        return false;
      }

    }

    return true;
  }

  static notCards(dragObject, dropElem) {

    let cardsShirt = document.querySelector('.cards__shirt > div');
    let cardsBottom = document.querySelector('.cards__bottom .cards__element > div');


    if (!cardsShirt && !cardsBottom) {
      alert(`Поздравляю вы победили! Ваш результат: ${time.$el.innerText}`);
      clearInterval(time.intervalId);
    }

  }

}