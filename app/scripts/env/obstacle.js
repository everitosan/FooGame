export default class Obstacle {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
  }
  move(y) {
    this.y += y;
  }
}
