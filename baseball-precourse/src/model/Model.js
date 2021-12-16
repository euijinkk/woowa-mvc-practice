import { RANDOM_LENGTH } from '../utils/constant.js';

export class Model {
  computerInputNumbers = [];

  generateRandomNumbers() {
    MissionUtils.Random.pickNumberInRange(1, 9);
    const randomNumbers = [];
    while (randomNumbers.length < RANDOM_LENGTH) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (randomNumbers.includes(randomNumber)) {
        continue;
      }
      randomNumbers.push(randomNumber);
    }
    this.computerInputNumbers = randomNumbers.join('');
    return this.computerInputNumbers;
  }
}
