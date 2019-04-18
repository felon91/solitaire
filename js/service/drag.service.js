import {Correctstack} from "./correctstack.service";

let dragObject = {};

export class Drag {

  static startDrag(e) {

    if (e.which != 1) {
      return;
    }

    let openCard = e.target.closest('.cards__open > .js-card, .cards__field .open, .cards__element .js-card:last-child:not(.disabled)');

    if (!openCard) return;

    dragObject['card'] = openCard;
    dragObject['downX'] = e.pageX;
    dragObject['downY'] = e.pageY;

    return false;

  }

  static moveDrag(e) {
    if (!dragObject.card) return;

    if ( !dragObject.avatar ) {

      let moveX = e.pageX - dragObject.downX;
      let moveY = e.pageY - dragObject.downY;

      if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
        return;
      }

      dragObject.avatar = createAvatar(e);
      if (!dragObject.avatar) {
        dragObject = {};
        return;
      }

      let coords = getCoords(dragObject.avatar);
      dragObject.shiftX = dragObject.downX - coords.left;
      dragObject.shiftY = dragObject.downY - coords.top;

      startMove(e);
    }

    dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
    dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';

    return false;
  }

  static upDrag(e) {
    if (dragObject.avatar) {
      finishDrag(e);
    }

    dragObject = {};
  }

}

function createAvatar(e) {

  let avatar = dragObject.card;
  let old = {
    parent: avatar.parentNode,
    nextSibling: avatar.nextSibling,
    position: avatar.position || '',
    left: avatar.left || '',
    top: avatar.top || '',
    zIndex: avatar.zIndex || ''
  };

  avatar.rollback = function() {
    old.parent.insertBefore(avatar, old.nextSibling);
    avatar.style.position = old.position;
    avatar.style.left = old.left;
    avatar.style.top = old.top;
    avatar.style.zIndex = old.zIndex
  };

  return avatar;

}

function startMove(e) {
  let avatar = dragObject.avatar;

  document.body.appendChild(avatar);
  avatar.classList.add('open');
  avatar.style.zIndex = 9999;
  avatar.style.position = 'absolute';
}

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}

function finishDrag(e) {
  let dropElem = findDroppable(e);

  if (!dropElem) {
    onDragCancel(dragObject);
  } else {
    onDragEnd(dragObject, dropElem);
  }
}

function findDroppable(event) {
  dragObject.avatar.hidden = true;

  let elem = document.elementFromPoint(event.clientX, event.clientY);

  dragObject.avatar.hidden = false;

  if (elem == null) {
    return null;
  } else if (elem.closest('.cards__element')) {
    return elem.closest('.cards__element');
  } else if (elem.closest('.cards__field')) {
    return elem.closest('.cards__field');
  }

}

function onDragCancel(dragObject) {
  dragObject.avatar.rollback();
}

function onDragEnd(dragObject, dropElem) {

  if (dropElem.classList.contains('cards__element')) {
    if (Correctstack.checkSuit(dragObject, dropElem) && Correctstack.checkCardNumber(dragObject, dropElem)) {
      dragObject.card.style = '';
      dropElem.insertAdjacentElement('beforeEnd', dragObject.card);
    } else {
      onDragCancel(dragObject);
    }
  } else {
    if (Correctstack.checkSuit(dragObject, dropElem) && Correctstack.checkCardNumber(dragObject, dropElem)) {
      dragObject.card.style = '';
      dropElem.insertAdjacentElement('beforeEnd', dragObject.card);
    } else {
      onDragCancel(dragObject);
    }
  }

}