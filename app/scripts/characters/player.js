import Character from './character';
import Bullet from '../env/bullet';

export default class Player extends Character{
  constructor(x, y, sprite) {
    super(x, y, 100, 15, 87, 120, 20, sprite);
    this.bullets = [];
  }
  draw (ctx) {
    this.drawSprite(ctx);
    this.drawBullets(ctx);
  }

  drawSprite (ctx) {
    ctx.save();
    ctx.drawImage(this.sprite, this.sx, this.sy, this.w, this.h, this.x, this.y, this.w, this.h);
    ctx.restore();
  }

  drawBullets(ctx) {
    for (let i in this.bullets) {
      this.bullets[i].move(5);
      this.bullets[i].draw(ctx, this.sprite);
    };
    this.bullets = this.bullets.filter(function(filter) {
      return filter.y>0;
    });
  }
  fire() {
    let Bull = new Bullet(this.x+(this.w*.47), this.y-(this.h*.5));
    this.bullets.push(Bull);
  }
  jump() {

  }
  toString() {
    return '(' + this.x + ',' + this.y + ',' + this.w +','+ this.h +')';
  }
 }
