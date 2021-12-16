export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  triggerEvent() {
    this.view.setOnSubmit(this.onSubmit.bind(this));
  }

  onSubmit(value) {
    const ball = this.calculateBall(value);
    const strike = this.calculateStrike(value);
    showResult(ball, strike);
  }
}
