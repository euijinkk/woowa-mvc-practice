import { $ } from '../utils/DOM.js';
import { APP_TEMPLATE, CORRECT_RESULT } from '../utils/template.js';

export class View {
  constructor() {
    this.$app = $('#app');
    this.addElements();
  }

  setOnSubmit(fn) {
    this.$submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      const userInputNumbers = this.$userInput.value;
      fn(userInputNumbers);
    });
  }

  setOnRestart(fn) {
    $('#game-restart-button').addEventListener('click', (e) => {
      e.preventDefault();
      this.$userInput.value = '';
      this.$result.innerHTML = '';
      fn();
    });
  }

  showResult(ballCount) {
    if (ballCount === '3스트라이크') {
      this.$result.innerHTML = CORRECT_RESULT;
      return;
    }
    this.$result.innerHTML = ballCount;
  }

  addElements() {
    this.$app.innerHTML = APP_TEMPLATE;
    this.$userInput = $('#user-input');
    this.$submitButton = $('#submit');
    this.$result = $('#result');
  }
}
