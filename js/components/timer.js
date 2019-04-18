import {Component} from "../core/component";

let instance = null;

export class Timer extends Component {
  constructor(cls) {
    super(cls);

    if(!instance) {
      instance = this;
    }

    instance.intervalId = instance.renderTimer(instance.$el);
    return instance;

  }

  init() {}

  renderTimer(timer) {
    clearInterval(instance.intervalId);

    let i = 1;

    let minutes = '00';
    let seconds = 0;

    const prevResult = `<p>00:00</p>`;
    timer.innerHTML = prevResult;

    let timerId = setInterval(() => {

      if (i < 60) {

        if (seconds < 9) {
          seconds = `0${++seconds}`;
        } else {
          seconds++;
        }

      } else {
        i = 0;
        seconds = '00';

        if (minutes < 9) {
          minutes = `0${++minutes}`;
        } else {
          minutes++;
        }

      }

      i++;

      let result = `<p>${minutes}:${seconds}</p>`;
      timer.innerHTML = result;
    }, 1000);

    return timerId;


  }

}
