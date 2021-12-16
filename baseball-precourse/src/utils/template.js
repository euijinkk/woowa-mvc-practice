export const APP_TEMPLATE = `
  <h1>⚾ 숫자 야구 게임</h1>
  <p>
    <strong>1~9까지의 수</strong>를 중복없이
    <strong>3개</strong> 입력해주세요. <br />
    올바른 예) 139 <br />
    틀린 예) 122
  </p>
  <form>
    <input type="text" id="user-input" />
    <button id="submit">확인</button>
  </form>
  <h3>📄 결과</h3>
  <div id="result"></div>
`;

export const CORRECT_RESULT = `
  <h4>🎉정답을 맞추셨습니다!🎉</h4>
  <div>
    <span>게임을 새로 시작하시겠습니까?</span>
    <button id="game-restart-button">게임 재시작</button>
  </div>
`;
