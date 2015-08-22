import Character from './character';
export default class Enemy2 extends Character{
  constructor(x, y, direction, sprite) {
    super(x, y, 0, 0, 90, 115, 20, sprite);

    this.direction = direction;
  }
  drawSprite (ctx) {
    ctx.save();
    ctx.drawImage(this.sprite, this.sx, this.sy, this.w, this.h, this.x, this.y, this.w, this.h);
    ctx.restore();
  }
}
