import Character from './character';
export default class Enemy2 extends Character{
  constructor(x, y, direction) {
    super(x, y, 20, 30);
    this.direction = direction;
  }
}
