import Character from './character';
import Bullet from '../env/bullet';

export default class Player extends Character{
  constructor(x, y, ctx) {
    super(x, y, 50, 50, ctx, 20);
    this.bullets = [];
  }
  draw () {
    this.drawPlayer();
    this.drawBullets();
  }

  drawPlayer () {
    this.ctx.save();
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.ctx.restore();
  }
  drawBullets() {
    this.ctx.save();
    for (let i in this.bullets) {
      this.bullets[i].move(2);
      this.bullets[i].draw();
    };
    this.ctx.restore();
    this.bullets = this.bullets.filter(function(filter) {
      return filter.y>0;
    });
  }
  fire() {
    let Bull = new Bullet(this.x+(this.w*.5), this.y-(this.h*.5), this.ctx);
    this.bullets.push(Bull);
  }
  jump() {

  }
  toString() {
    return '(' + this.x + ',' + this.y + ',' + this.w +','+ this.h +')';
  }
 }
