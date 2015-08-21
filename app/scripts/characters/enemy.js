import Character from './character';
export default class Enemy extends Character{
  constructor(x, y, direction) {
    super(x, y, 30, 20);
    this.direction = direction;
  }
}
