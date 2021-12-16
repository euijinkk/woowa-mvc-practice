export class Model {
  computerInputNumbers;

  generateRandomNumbers() {
    MissionUtils.Random.pickNumberInRange(1, 9);
    const randomNumbers = [];
    while (randomNumbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (randomNumbers.includes(randomNumber)) {
        continue;
      }
      randomNumbers.push(randomNumber);
    }
    return Number(randomNumbers.join(''));
  }
}
