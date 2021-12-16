import { Model } from './model/Model.js';
import { View } from './view/view.js';

class BaseballGame {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.model.generateRandomNumbers();
    this.triggerEvent();
  }

  triggerEvent() {
    this.view.setOnSubmit(this.onSubmit.bind(this));
  }

  onSubmit(userInputNumbers) {
    const computerInputNumbers = this.model.computerInputNumbers;
    console.log(`computerInputNumbers`, computerInputNumbers);
    const ballCount = this.play(computerInputNumbers, userInputNumbers);
    console.log(`ballCount`, ballCount);
    // showResult(ball, strike);
  }

  play(computerInputNumbers, userInputNumbers) {
    const ball = this.calculateBall(computerInputNumbers, userInputNumbers);
    const strike = this.calculateStrike(computerInputNumbers, userInputNumbers);

    return `${ball}볼 ${strike}스트라이크`;
  }
  calculateBall(computerInputNumbers, userInputNumbers) {
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (
        computerInputNumbers.includes(userInputNumbers[i]) &&
        computerInputNumbers[i] !== userInputNumbers[i]
      ) {
        ball++;
      }
    }
    return ball;
  }

  calculateStrike(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike++;
      }
    }
    return strike;
  }
}

const app = new BaseballGame();
