export default class Bullet {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.w = 4;
    this.h = 15;
    this.ctx = ctx;
  }
  move(y) {
    this.y -=y;
  }
  draw() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
