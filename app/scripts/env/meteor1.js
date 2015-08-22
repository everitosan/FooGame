import Obstacle from './obstacle';

export default class Meteor1 extends Obstacle{
  constructor(x, y, sprite) {
    super(x, y, sprite);
    this.w = 60;
    this.h = 60;
  }

  draw(ctx){
    this.move(4);
    ctx.save();
    ctx.drawImage(this.sprite, 240, 28,  this.w, this.h, this.x, this.y, this.w, this.h);
    ctx.restore();
  }
}
