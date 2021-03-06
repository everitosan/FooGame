export default class Character {
  constructor(x, y, sx, sy, w, h, speed, sprite) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.sx = sx;
    this.sy = sy;
    this.w = w;
    this.h = h;
    this.speed = speed;
  }
  moveRight() {
    let lim = window.innerWidth - this.w;
    if (this.x >= lim) {
      this.x = lim;
    }
    else {
      this.x +=this.speed;
    }
  }
  moveLeft() {
    if (this.x <= 0) {
      this.x = 0;
    }
    else {
      this.x -=this.speed;
    }
  }
  moveUp() {
    if (this.y <= 0) {
      this.y = 0;
    }
    else {
      this.y -=this.speed;
    }
  }
  moveDown() {
    let lim = window.innerHeight - this.h;
    if (this.y >= lim) {
      this.y = lim;
    }
    else {
      this.y +=this.speed;
    }
  }

}
