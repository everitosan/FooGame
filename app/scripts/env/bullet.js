export default class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 4;
    this.h = 15;
  }
  move(y) {
    this.y -=y;
  }
  draw(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
