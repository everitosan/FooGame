let $ = require('jquery');
export default class Scene{
  constructor(sheet) {
    this.sheet = sheet;
    this.counter = 0;
    this.continue = true;
  }
  start(ctx) {
    ctx.save();
    ctx.fillStyle = '#333';
    ctx.fillRect(0,0,innerWidth, innerHeight);
    ctx.drawImage(this.sheet, 0, 0);
    ctx.restore();
  }
  end(ctx, eneLen) {
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,.8)';
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    ctx.fillStyle = 'rgba(255,255,255,.8)';
    ctx.font='Bold, 80pt, Helvetica';
    if(eneLen > 0) {//You loose
      ctx.fillText('You lose!', innerWidth/2, innerHeight/2);
    }
    else { //You Win
      ctx.fillText('You Win!', innerWidth/2, innerHeight/2);
    }
    ctx.restore();
  }
  events(P1) {
    $(window).on('keydown', function(e){
  		if(e.keyCode === 37 || e.keyCode === 65) { //Move to left
  			P1.moveLeft();
  		}
  		else if(e.keyCode === 39 || e.keyCode === 68) { //Move to right
  			P1.moveRight();
  		}
  		else if(e.keyCode === 38 || e.keyCode === 87) { //Move up
  			P1.moveUp();
  		}
  		else if(e.keyCode === 40 || e.keyCode === 83) { //Move Down
  			P1.moveDown();
  		}
  		else if(e.keyCode === 32) { //Jump
  			P1.jump();
  		}
  		else if(e.keyCode === 13) { //Fire
  			P1.fire();
  		}
  	});
  }
  drawEmenies(arr, ctx){
    let counter = this.counter ++;
    arr.forEach(function(enemy) {
      if(enemy.direction ==1) {
        enemy.x +=(1)*Math.sin(counter * Math.PI / 15)*5;
      }
      else {
        enemy.x +=(-1)*Math.sin(counter * Math.PI / 15)*5;
      }

      enemy.drawSprite(ctx);
    });
  }

  drawObstacles(arr, ctx) {
    //Draw valid meteors
    arr.forEach(function(obstacle){
      obstacle.draw(ctx);
    });
    //Filter valid meteors
    arr = arr.filter(function(filter) {
      return filter.y<innerHeight;
    });
  }

  bulletEnemyCollision(Bullets, Enemies) {
    Bullets.forEach(function(bullet, indexBullet, bullets){
      Enemies.forEach(function(enemy, indexEnemy, enemies){
        if(this.hit(bullet, enemy)){
          enemies.splice(indexEnemy, 1);
          bullets.splice(indexBullet, 1);
          if (enemies.length == 0) {
            this.continue = false;
          }
        }
      }, this);
    }, this);
  }
  bulletObstacleCollision(Bullets, Obstacles) {
    Bullets.forEach(function(bullet, indexBullet, bullets){
      Obstacles.forEach(function(obstacle){
        if(this.hit(bullet, obstacle)){
          bullets.splice(indexBullet, 1);
        }
      }, this);
    }, this);
  }
  obstacleCollision(P1, Obstacles) {
    Obstacles.forEach(function(obstacle, indexObstacle, Obstacles){
        if(this.hit(P1, obstacle) && !P1.z){
          this.continue = false;
        }
    }, this);
  }

  hit(a, b) {
    var collition = false;
    if(b.x + b.w >= a.x && b.x <a.x + a.w) {
      if(b.y + b.h >= a.y && b.y < a.y +a.h) {
        collition = true;
      }
    }
    if(b.x <= a.x && b.x + b.w >= a.x + a.w) {
      if(b.y <= a.y && b.y + b.h >= a.y + a.h) {
        collition = true;
      }
    }
    if(a.x <= b.x && a.x + a.w >= b.x + b.w) {
      if(a.y <= b.y && a.y + a.h >= b.y + b.h) {
        collition = true;
      }
    }
    return collition;
  }
}
