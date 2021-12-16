import { $ } from '../utils/DOM.js';
import { APP_TEMPLATE } from '../utils/template.js';

export class View {
  constructor() {
    this.$app = $('#app');
    this.addElements();
  }

  addElements() {
    this.$app.innerHTML = APP_TEMPLATE;
  }
}
