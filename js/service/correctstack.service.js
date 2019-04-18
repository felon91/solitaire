//spade club (черные)
//diamond heart (красные)

import {pictureToNumber} from "../index";

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

          if (lastCard.classList.contains('spade')) {
            return true;
          }
          return;

        } else if (dragObject.card.classList.contains('club')) {

          if (lastCard.classList.contains('club')) {
            return true;
          }
          return;

        } else if (dragObject.card.classList.contains('diamond')) {

          if (lastCard.classList.contains('diamond')) {
            return true;
          }
          return;

        } else if (dragObject.card.classList.contains('heart')) {

          if (lastCard.classList.contains('heart')) {
            return true;
          }
          return;

        }

      }

    } else {
      return true;
    }

  }

  static checkCardNumber(dragObject, dropElem) {
    let lastCard = dropElem.querySelector('div:last-child');

    if (lastCard) {
      console.log(dragObject, dropElem);
    } else if (!lastCard && dropElem.classList.contains('cards__field')) {

      if (dragObject.card.children[0].innerText === 'A') {
        return true;
      }
      return;

    } else if (!lastCard && dropElem.classList.contains('cards__element')) {

    }

    return true;
  }

}