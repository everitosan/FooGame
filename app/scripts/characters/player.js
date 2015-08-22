import Character from './character';
import Bullet from '../env/bullet';

export default class Player extends Character{
  constructor(x, y, sprite) {
    super(x, y, 100, 20, 87, 90, 20, sprite);
    this.bullets = [];
    this.z = false;
    this.counter = 0;
  }
  draw (ctx) {
    this.drawSprite(ctx);
    this.drawBullets(ctx);
  }

  drawSprite (ctx) {
    ctx.save();
    if(this.z) {
        this.counter ++;
        ctx.scale(1.225,1.225);
        ctx.translate(-this.w, -this.h);
        if(this.counter > 50) {
          this.z = 0;
          this.counter = 0;
        }
    }
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
    this.z = true;
  }
 }
