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
    this.view.showResult(ballCount);
  }

  play(computerInputNumbers, userInputNumbers) {
    const ball = this.calculateBall(computerInputNumbers, userInputNumbers);
    const strike = this.calculateStrike(computerInputNumbers, userInputNumbers);
    if (ball === '' && strike === '') {
      return '낫싱';
    }

    return `${ball} ${strike}`.trim();
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
    if (ball === 0) {
      return '';
    }
    return `${ball}볼`;
  }

  calculateStrike(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike++;
      }
    }
    if (strike === 0) {
      return '';
    }
    return `${strike}스트라이크`;
  }
}

const app = new BaseballGame();
