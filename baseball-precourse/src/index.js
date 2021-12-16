import { Model } from './model/Model.js';
import { View } from './view/view.js';

class BaseballGame {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.triggerEvent();
  }

  triggerEvent() {
    this.view.setOnSubmit(this.onSubmit.bind(this));
  }

  onSubmit(userInputNumbers) {
    const computerInputNumbers = this.model.generateRandomNumbers();
    console.log(`computerInputNumbers`, computerInputNumbers);
    const ballCount = this.play(computerInputNumbers, userInputNumbers);
    // showResult(ball, strike);
  }

  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }
}

const app = new BaseballGame();
