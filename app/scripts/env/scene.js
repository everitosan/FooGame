let $ = require('jquery');
export default class Scene{
  constructor(sheet, ctx) {
    this.sheet = sheet;
    this.ctx = ctx;
  }
  start() {
    //this.ctx.drawImage(this.sheet, -100, -50);
    this.ctx.save();
    this.ctx.fillStyle = '#333';
    this.ctx.fillRect(0,0,innerWidth, innerHeight);
    this.ctx.restore();
  }
}
