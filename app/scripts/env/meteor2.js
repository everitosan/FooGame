import Obstacle from './obstacle';

export default class Meteor2 extends Obstacle{
  constructor(x, y, sprite) {
    super(x, y, sprite);
    this.w = 65;
    this.h = 60;
  }

  draw(ctx){
    this.move(2);
    ctx.save();
    ctx.drawImage(this.sprite, 310, 28,  this.w, this.h, this.x, this.y, this.w, this.h);
    ctx.restore();
  }
}
