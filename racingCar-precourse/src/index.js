import { Model } from "./model/Model.js";
import { View } from "./view/View.js";

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.triggerEvent();
  }

  triggerEvent() {}
}

const controller = new Controller();
