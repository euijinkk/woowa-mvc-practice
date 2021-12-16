import { Model } from './model/Model.js';
import { COUNT_TEXT, RANDOM_LENGTH } from './utils/constant.js';
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

  triggerRestartEvent() {
    this.view.setOnRestart(this.onRestart.bind(this));
  }

  onSubmit(userInputNumbers) {
    const computerInputNumbers = this.model.computerInputNumbers;
    const ballCount = this.play(computerInputNumbers, userInputNumbers);
    this.view.showResult(ballCount);
    if (ballCount === `3${COUNT_TEXT.STRIKE}`) {
      this.triggerRestartEvent();
    }
  }

  onRestart() {
    this.model.generateRandomNumbers();
  }

  play(computerInputNumbers, userInputNumbers) {
    const ball = this.calculateBall(computerInputNumbers, userInputNumbers);
    const strike = this.calculateStrike(computerInputNumbers, userInputNumbers);
    if (ball === '' && strike === '') {
      return COUNT_TEXT.NOTHING;
    }
    return `${ball} ${strike}`.trim();
  }

  calculateBall(computerInputNumbers, userInputNumbers) {
    let ball = 0;
    for (let i = 0; i < RANDOM_LENGTH; i++) {
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
    return `${ball}${COUNT_TEXT.BALL}`;
  }

  calculateStrike(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    for (let i = 0; i < RANDOM_LENGTH; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike++;
      }
    }
    if (strike === 0) {
      return '';
    }
    return `${strike}${COUNT_TEXT.STRIKE}`;
  }
}

const baseballGame = new BaseballGame();
