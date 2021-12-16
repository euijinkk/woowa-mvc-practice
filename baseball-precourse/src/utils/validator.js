import { RANDOM_LENGTH, USER_INPUT_ALERT } from './constant.js';

export const userInputCheckMethods = [
  // 3자리 수만 입력받도록
  (value) => {
    const isRightDigit = value.trim().length === RANDOM_LENGTH;
    if (!isRightDigit) {
      alert(USER_INPUT_ALERT.lengthError);
    }
    return isRightDigit;
  },
  // 빈칸 및 공백 입력 금지
  (value) => {
    const isFilled = value.trim() !== '';
    if (!isFilled) {
      alert(USER_INPUT_ALERT.blankError);
    }
    return isFilled;
  },
  // 0이 아닌 숫자를 입력 받도록
  (value) => {
    const isNumber = Number(value);
    if (!isNumber) {
      alert(USER_INPUT_ALERT.notNumberError);
    }
    return isNumber;
  },
  // 0을 포함하면 안되도록
  (value) => {
    console.log(`value.includes('0')`, value.includes('0'));
    const isZeroIncluded = value.includes('0');
    if (isZeroIncluded) {
      alert(USER_INPUT_ALERT.includeZeroError);
    }
    return !isZeroIncluded;
  },
  // 중복되지 않은 숫자를 입력하도록
  (value) => {
    const isOverlapped = new Set(value).size !== RANDOM_LENGTH;
    if (isOverlapped) {
      alert(USER_INPUT_ALERT.overlapError);
    }
    return !isOverlapped;
  },
];

export function isUserInputValid(value) {
  return userInputCheckMethods.every((userInputCheckMethod) => userInputCheckMethod(value));
}
