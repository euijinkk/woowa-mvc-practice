import { $ } from '../utils/DOM.js';
import { APP_TEMPLATE } from '../utils/template.js';

export class View {
  constructor() {
    this.$app = $('#app');
    this.addElements();
  }

  setOnSubmit(fn) {
    this.$submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      fn(e.target.value);
    });
  }

  addElements() {
    this.$app.innerHTML = APP_TEMPLATE;
    this.$userInput = $('#user-input');
    this.$submitButton = $('#submit');
    this.$result = $('#result');
  }
}
