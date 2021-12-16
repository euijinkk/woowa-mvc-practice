import { Model } from './model/Model.js';
import { View } from './view/view.js';
import { Controller } from './controller/Controller.js';

class App {
  constructor() {
    const view = new View();
    const model = new Model();

    this.controller = new Controller(model, view);
  }
}

const app = new App();
