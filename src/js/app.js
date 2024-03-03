// TODO: write your code here
import sum from './basic';
import loadGame, * as saveGame from './game';

const game = new loadGame();
game.start();
console.log('worked');

console.log(sum([1, 2]));
