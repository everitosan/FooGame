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
    ctx.save();
    //ctx.fillStyle = 'red';
    //ctx.fillRect(this.x, this.y, this.w, this.h);
    let sprite = new Image();
  	sprite.src = "../img/sprites.png";

    ctx.drawImage(sprite, 138, 159, 153, 189, this.x, this.y, 153, 189);
    ctx.restore();
  }
}
